#!/usr/bin/env bash
set -e

# === CONFIGURATION ===
PROJECT_ID="riosolved-458703"
BUCKET_NAME="www.riosolved.com"

cd "$(dirname "$0")/../"

gcloud config set project "$PROJECT_ID"

echo "Deleting bucket..."

gsutil rm -r "gs://${BUCKET_NAME}" || true

echo "Bucket deleted."
