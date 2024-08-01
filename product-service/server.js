const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Importing the UUID library
const app = express();
const port = 3001;

app.use(express.json());

const products = [];

app.post('/products', (req, res) => {
  const { name, price } = req.body;
  const newProduct = { id: uuidv4(), name, price }; // Generating a unique UUID for each product
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Product service listening at http://localhost:${port}`);
});
