#!/bin/bash

# Log file location
LOGFILE="/var/log/deploy.log"

# Redirect stdout and stderr to log file
exec > >(tee -i $LOGFILE)
exec 2>&1

echo "Starting deployment at $(date)"

# Change to the directory where docker-compose.yml is located
cd home/chandraprakash/Spider-T2/docker-compose

# Pull the latest Docker images
echo "Pulling latest Docker images..."
if ! docker-compose pull; then
    echo "Error pulling Docker images. Deployment aborted." >&2
    exit 1
fi

# Restart the services with the latest images
echo "Recreating and restarting services..."
if ! docker-compose up -d; then
    echo "Error restarting services. Deployment aborted." >&2
    exit 1
fi

echo "Deployment successful at $(date)"
exit 0
