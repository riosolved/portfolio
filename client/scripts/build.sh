#!/usr/bin/env bash
set -e

cd "$(dirname "$0")/../"

# === BUILD TAILWIND ===
echo "Building Tailwind CSS..."
npx @tailwindcss/cli -i ./index.css -o ./public/index.css --minify

# === BUILD VITE ===
echo "Building Vite site..."
npx vite --mode production --config ./vite.configuration.production.js build
