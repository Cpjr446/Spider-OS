# E-commerce Microservices System

This project implements a basic e-commerce system using a microservices architecture.

## Setup Instructions

### Prerequisites
- Docker
- Docker Compose
- Node.js (for local development)

### Local Setup
1. Clone the repository: https://github.com/Cpjr446/Spider-T2.git
cd Spider-T2
2. Install dependencies for each service:
   cd user-service && npm install
   cd ../product-service && npm install
   cd ../cart-service && npm install
3. Run the services locally:
cd user-service && node server.js
cd ../product-service && node server.js
cd ../cart-service && node server.js

### Running with Docker
1. Build and start the containers:
   2. The services will be available at:
- User Service: http://localhost:3000
- Product Service: http://localhost:3001
- Cart Service: http://localhost:3002

## CI/CD Pipeline

This project uses GitHub Actions for CI/CD. The pipeline is triggered on every push to the main branch.

### Pipeline Steps
1. Builds Docker images for each service
2. Pushes the images to Docker Hub
3. Deploys the updated services to the production server

### Configuration
To set up the CI/CD pipeline:

1. Add the following secrets to your GitHub repository:
- DOCKERHUB_USERNAME: Your Docker Hub username
- DOCKERHUB_TOKEN: Your Docker Hub access token

2. Ensure your server has Docker and Docker Compose installed.

3. Set up the initial project structure on your server.

## Deployment Process

The deployment process is automated through the CI/CD pipeline. 
