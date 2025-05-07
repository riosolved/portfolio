#!/usr/bin/env bash
cd "$(dirname "$0")/../"

PROJECT_ID="riosolved-458703"
FUNCTION_NAME="riosolved-api-go"
REGION="us-west1"
RUNTIME="go122"
NETWORK_ENDPOINT_GROUP_NAME="riosolved-api-network-endpoint-group"
BACKEND_SERVICE="riosolved-api-backend-service"
URL_MAP_NAME="riosolved-url-map"
HTTPS_PROXY_NAME="riosolved-https-proxy"
BACKEND_BUCKET_NAME="riosolved-backend-bucket"

echo "Deploying server..."

gcloud config set project "$PROJECT_ID"

if ! gcloud storage buckets describe "gs://${FUNCTION_NAME}" --format="get(name)" 2>/dev/null; then
    echo "Creating bucket for API function...";

    gcloud storage buckets create "gs://$FUNCTION_NAME"
else
    echo "Bucket already exists: $FUNCTION_NAME";
fi

gsutil iam ch allUsers:objectViewer "gs://${FUNCTION_NAME}"

cd source
zip -r ../source.zip .
cd ..

gsutil cp ./source.zip "gs://$FUNCTION_NAME/source.zip"

rm ./source.zip

# == DEPLOY CLOUD FUNCTION ==
gcloud run deploy "$FUNCTION_NAME" \
  --region="$REGION" \
  --source="gs://$FUNCTION_NAME/source.zip" \
  --function API \
  --base-image go122 \
  --allow-unauthenticated \
  --set-env-vars ENVIRONMENT=production \
  --set-secrets="GOOGLE_APPLICATION_PASSWORD=GOOGLE_APPLICATION_PASSWORD:latest,RECAPTCHA_V3_SECRET=RECAPTCHA_V3_SECRET:latest"

# == SERVERLESS NETWORK ENDPOINT GROUP
if ! gcloud compute network-endpoint-groups describe "$NETWORK_ENDPOINT_GROUP_NAME" --region="$REGION" --format="get(name)" 2>/dev/null ; then
    echo "Creating serverless network endpoint group: $NETWORK_ENDPOINT_GROUP_NAME"

    gcloud compute network-endpoint-groups create "$NETWORK_ENDPOINT_GROUP_NAME" \
        --region="$REGION" \
        --network-endpoint-type=serverless \
        --cloud-function-name="$FUNCTION_NAME"
else    
    echo "Serverless network endpoint group already exists."
fi

# == CREATE BACKEND SERVICE ==
if ! gcloud compute backend-services describe "$BACKEND_SERVICE" --global --format="get(name)" 2>/dev/null ; then
    echo "Creating backend service : $BACKEND_SERVICE"

    gcloud compute backend-services create "$BACKEND_SERVICE" \
        --global \
        --protocol=HTTP

    gcloud compute backend-services add-backend "$BACKEND_SERVICE" \
        --global \
        --network-endpoint-group="$NETWORK_ENDPOINT_GROUP_NAME" \
        --network-endpoint-group-region="$REGION"
else    
    echo "The backend service already exists."
fi

# == URL MAP PATH RULE (CREATED IN CLIENT DEPLOYMENT) ==
gcloud compute url-maps remove-path-matcher "riosolved-url-map" --path-matcher-name="api-matcher"

gcloud compute url-maps add-path-matcher "$URL_MAP_NAME" \
    --path-matcher-name="api-matcher" \
    --default-backend-bucket="$BACKEND_BUCKET_NAME" \
    --path-rules="/api/*=$BACKEND_SERVICE" \
    --new-hosts="www.riosolved.com"

gcloud compute target-https-proxies update "$HTTPS_PROXY_NAME" \
    --url-map="$URL_MAP_NAME"

echo "Deployment completed."
