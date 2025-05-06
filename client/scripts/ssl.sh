#!/usr/bin/env bash
set -e

CERTIFICATE_NAME="riosolved-ssl-certificate"
DOMAIN_NAME="www.riosolved.com"

if ! gcloud compute ssl-certificates describe "$CERTIFICATE_NAME" --format="get(name)" 2>/dev/null; then
    echo "Creating managed SSL certificate for $DOMAIN_NAME..."

    gcloud compute ssl-certificates create "$CERTIFICATE_NAME" \
        --domains="$DOMAIN_NAME" \
        --global \
        --description="Managed certificate for HTTP load balancer."
else 
    echo "SSL certificate already exists."
fi