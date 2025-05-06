#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

PROJECT_ID="riosolved-458703"
FUNCTION_NAME="riosolved-api-go"
# FUNCTION_NAME="api"
REGION="us-west1"
RUNTIME="go122"
# ENTRY_POINT="API"
# SOURCE_DIRECTORY="./handlers"
# ENTRY_POINT="Handler"
ENTRY_POINT="F"
# SOURCE_DIRECTORY="./function"
NETWORK_ENDPOINT_GROUP_NAME="riosolved-api-network-endpoint-group"
BACKEND_SERVICE="riosolved-api-backend-service"
URL_MAP_NAME="riosolved-url-map"
HTTPS_PROXY_NAME="riosolved-https-proxy"

echo "Deploying server..."

gcloud config set project "$PROJECT_ID"

# == DEPLOY CLOUD FUNCTION ==
# gcloud functions deploy "$FUNCTION_NAME" \
#     --region="$REGION" \
#     --runtime="$RUNTIME" \
#     --entry-point="$ENTRY_POINT" \
#     --trigger-http \
#     --allow-unauthenticated \
#     --source="$SOURCE_DIRECTORY"
# GOOS=linux GOARCH=amd64 go build -o function
# zip function.zip function function.json
# if ! gcloud storage buckets describe "gs://${FUNCTION_NAME}" --format="get(name)" 2>/dev/null; then
#     echo "Creating bucket for API function...";
#     gcloud storage buckets create "gs://$FUNCTION_NAME"
# else
#     echo "Bucket already exists: $FUNCTION_NAME";
# fi
# gsutil cp function.zip "gs://$FUNCTION_NAME"
# gsutil iam ch allUsers:objectViewer "gs://${FUNCTION_NAME}"

#   --entry-point="handler.API" \
gcloud functions deploy "$FUNCTION_NAME" \
  --runtime go122 \
  --trigger-http \
  --entry-point="F" \
  --source "./server" \
  --allow-unauthenticated


# gcloud functions deploy "$FUNCTION_NAME" \
#     --region="$REGION" \
#     --runtime="$RUNTIME" \
#     --trigger-http \
#     --entry-point="handler.API" \
#     --source "gs://$FUNCTION_NAME/function.zip" \
#     --allow-unauthenticated

# gcloud functions deploy "$FUNCTION_NAME" \
#     --region="$REGION" \
#     --runtime="$RUNTIME" \
#     --entry-point="$ENTRY_POINT" \
#     --trigger-http \
#     --allow-unauthenticated

# == SERVERLESS NETWORK ENDPOINT GROUP
if ! gcloud compute network-endpoint-groups describe "$NETWORK_ENDPOINT_GROUP_NAME" --format="get(name)" 2>/dev/null ; then
    echo "Creating serverless network endpoint group: $NETWORK_ENDPOINT_GROUP_NAME"

    gcloud compute network-endpoint-groups create "$NETWORK_ENDPOINT_GROUP_NAME" \
        --region="$REGION" \
        --network-endpoint-type=serverless \
        --cloud-function-name="$FUNCTION_NAME"
else    
    echo "Serverless network endpoint group already exists."
fi

# == CREATE BACKEND SERVICE ==
if ! gcloud compute backend-services describe "$BACKEND_SERVICE" --format="get(name)" 2>/dev/null ; then
    echo "Creating backend service : $BACKEND_SERVICE"

    gcloud compute backend-services create "$BACKEND_SERVICE" \
        --global \
        --protocol=HTTPS
else    
    echo "The backend service already exists."
fi

gcloud compute backend-services add-backend "$BACKEND_SERVICE" \
    --global \
    --network-endpoint-group="$NETWORK_ENDPOINT_GROUP_NAME" \
    --network-endpoint-group-region="$REGION"

# == URL MAP PATH RULE ==

gcloud compute url-maps add-path-matcher "$URL_MAP_NAME" \
    --default-service="$BACKEND_SERVICE" \
    --patch-matcher-name="api-matcher" \
    --new-hosts="$DOMAIN" \
    --path-rules="/api/*=$BACKEND_SERVICE"

gcloud compute target-https-proxies update "$HTTPS_PROXY_NAME" \
    --url-map="$URL_MAP_NAME"

echo "Deployment completed."
