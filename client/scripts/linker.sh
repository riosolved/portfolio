#!/usr/bin/env bash
set -e

BACKEND_BUCKET_NAME="riosolved-backend-bucket"
URL_MAP_NAME="riosolved-url-map"
HTTPS_PROXY_NAME="riosolved-https-proxy"
CERTIFICATE_NAME="riosolved-ssl-certificate"
FORWARDING_RULE_NAME="riosolved-https-rule"
IP_NAME="riosolved-global-ip"

# == HANDLE BACKEND BUCKET ==
if ! gcloud compute backend-buckets describe "$BACKEND_BUCKET_NAME" --format="get(name)" 2>/dev/null; then
    echo "Creating back-end bucket...";

    gcloud compute backend-buckets create "$BACKEND_BUCKET_NAME" \
        --gcs-bucket-name="www.riosolved.com" \
        --enable-cdn
else
    echo "Backend bucket $BACKEND_BUCKET_NAME already exists.";
fi

# == HANDLE URL MAP ==
if ! gcloud compute url-maps describe "$URL_MAP_NAME" --format="get(name)" 2>/dev/null; then
    echo "Creating url-map..."

    gcloud compute url-maps create "$URL_MAP_NAME" \
        --default-backend-bucket="$BACKEND_BUCKET_NAME"
else
    echo "URL map $URL_MAP_NAME already exists.";
fi

# == HANDLE PROXY FOR HTTPS ==
if ! gcloud compute target-https-proxies describe "$HTTPS_PROXY_NAME" --format="get(name)" 2>/dev/null; then
    echo "Creating HTTPS proxy..."

    gcloud compute target-https-proxies create "$HTTPS_PROXY_NAME" \
        --ssl-certificates="$CERTIFICATE_NAME" \
        --url-map="$URL_MAP_NAME"
else
    echo "HTTPS proxy $HTTPS_PROXY_NAME already exists.";
fi

# == HTTPS FORWARDING RULE ==
if ! gcloud compute forwarding-rules describe "$FORWARDING_RULE_NAME" --global --format="get(name)" 2>/dev/null; then
    echo "Creating HTTPS forwarding rule..."

    gcloud compute forwarding-rules create "$FORWARDING_RULE_NAME" \
        --address="$IP_NAME" \
        --global \
        --target-https-proxy="$HTTPS_PROXY_NAME" \
        --ports=443
else
    echo "HTTPS forwarding rule already exists."
fi
