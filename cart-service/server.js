// cart-service/server.js
const express = require('express');
const app = express();
const port = 3002;

app.use(express.json());

const carts = {};

app.post('/cart/:userId/add', (req, res) => {
  const { userId } = req.params;
  const { productId, quantity } = req.body;
  
  if (!carts[userId]) {
    carts[userId] = [];
  }
  
  carts[userId].push({ productId, quantity });
  res.status(201).json(carts[userId]);
});

app.get('/cart/:userId', (req, res) => {
  const { userId } = req.params;
  res.json(carts[userId] || []);
});

app.listen(port, () => {
  console.log(`Cart service listening at http://localhost:${port}`);
});
