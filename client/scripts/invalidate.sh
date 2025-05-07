#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

gcloud compute url-maps invalidate-cdn-cache riosolved-url-map --path "/*"
