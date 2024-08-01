# user-service/Dockerfile 
FROM node:20.9.0-alpine

WORKDIR /Spider-T2/cart-service

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3002

CMD ["node", "server.js"]
