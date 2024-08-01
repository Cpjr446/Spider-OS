# user-service/Dockerfile 
FROM node:20.9.0-alpine

WORKDIR /Spider-T2/product-service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD ["node", "server.js"]
