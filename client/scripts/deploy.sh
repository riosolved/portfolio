#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

# === BUILD SITE ===
./scripts/build.sh

# === UPLOAD CLIENT TO BUCKET ===
./scripts/upload.bucket.sh

# === SSL CERTIFICATE ===
./scripts/ssl.sh

# === IP ADDRESS ===
./scripts/ip.sh

# === LINK IP TO BUCKET ===
./scripts/linker.sh
