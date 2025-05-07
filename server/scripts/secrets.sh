#!/usr/bin/env bash

read -p "GOOGLE_APPLICATION_PASSWORD: " GOOGLE_APPLICATION_PASSWORD
read -p "RECAPTCHA_V3_SECRET: " RECAPTCHA_V3_SECRET

# == SECRET: GOOGLE_APPLICATION_PASSWORD ==
gcloud secrets add-iam-policy-binding GOOGLE_APPLICATION_PASSWORD \
  --member="serviceAccount:192460448550-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

if ! gcloud secrets describe GOOGLE_APPLICATION_PASSWORD --format="get(name)" 2>/dev/null; then
    echo "Creating GOOGLE_APPLICATION_PASSWORD secret..."

    echo -n $GOOGLE_APPLICATION_PASSWORD | gcloud secrets create GOOGLE_APPLICATION_PASSWORD \
        --replication-policy="user-managed" \
        --locations="us-west1" \
        --data-file=-
else
    echo "Updating GOOGLE_APPLICATION_PASSWORD secret..."

    echo -n $GOOGLE_APPLICATION_PASSWORD | gcloud secrets versions add GOOGLE_APPLICATION_PASSWORD \
        --data-file=- 
fi

# == SECRET: RECAPTCHA_V3_SECRET ==
gcloud secrets add-iam-policy-binding RECAPTCHA_V3_SECRET \
  --member="serviceAccount:192460448550-compute@developer.gserviceaccount.com" \
  --role="roles/secretmanager.secretAccessor"

if ! gcloud secrets describe RECAPTCHA_V3_SECRET --format="get(name)" 2>/dev/null; then
    echo "Creating RECAPTCHA_V3_SECRET secret..."

    echo -n $RECAPTCHA_V3_SECRET | gcloud secrets create RECAPTCHA_V3_SECRET \
        --replication-policy="user-managed" \
        --locations="us-west1" \
        --data-file=-
else
    echo "Updating RECAPTCHA_V3_SECRET secret..."

    echo -n $RECAPTCHA_V3_SECRET | gcloud secrets versions add RECAPTCHA_V3_SECRET \
        --data-file=- 
fi
