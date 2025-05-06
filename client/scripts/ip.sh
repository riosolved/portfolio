#!/usr/bin/env bash
set -e

# == NOTE: WE MUST CREATE A GLOBAL STATIC IP ADDRESS FOR HTTPS, HTTPS DOES NOT SUPPORT REGIONAL STATIC IP ADDRESSES ==

IP_NAME="riosolved-global-ip"

if address=$(gcloud compute addresses describe "$IP_NAME" --global --format="get(address)" 2>/dev/null); then
    echo "A global static IP address already exists: $address";
else
    echo "Creating global static IP...";

    gcloud compute addresses create "$IP_NAME" --global;

    echo "Static IP is: $(gcloud compute addresses describe "$IP_NAME" --global --format="get(address)")";
fi
