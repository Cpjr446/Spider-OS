const express = require('express');
const { v4: uuidv4 } = require('uuid'); // Importing the UUID library
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: uuidv4(), username, password }; // Generating a unique UUID for each user
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id); 
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
