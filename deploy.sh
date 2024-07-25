#!/bin/bash

# Pull the latest images
docker-compose pull

# Stop the running containers
docker-compose down

# Start the containers with the new images
docker-compose up -d

# Remove unused images
docker image prune -f

echo "Deployment completed successfully!"
