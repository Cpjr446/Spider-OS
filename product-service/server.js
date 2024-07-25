// product-service/server.js
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

const products = [];

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: products.length + 1, name, price };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
