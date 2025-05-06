#!/usr/bin/env bash
set -e

# === CONFIGURATION ===
PROJECT_ID="riosolved-458703"
BUCKET_NAME="www.riosolved.com"
REGION="us-west1"
SOURCE_DIRECTORY="dist"

cd "$(dirname "$0")/../"

echo "Uploading client to bucket..."

gcloud config set project "$PROJECT_ID"

# === CREATE STATIC BUCKET IF NEEDED ===
if ! gsutil ls -b "gs://${BUCKET_NAME}" &>/dev/null; then
    echo "Bucket does not exist. Creating..."
    gsutil mb -l "$REGION" -p "$PROJECT_ID" "gs://${BUCKET_NAME}"
fi

gsutil web set -m index.html "gs://${BUCKET_NAME}"
gsutil -m rsync -R "$SOURCE_DIRECTORY" "gs://${BUCKET_NAME}"
gsutil iam ch allUsers:objectViewer "gs://${BUCKET_NAME}"

echo "Client has been deployed to bucket."
