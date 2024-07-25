// user-service/server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

app.post('/users', (req, res) => {
  const { username, password } = req.body;
  const newUser = { id: users.length + 1, username, password };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('User not found');
  res.json(user);
});

app.listen(port, () => {
  console.log(`User service listening at http://localhost:${port}`);
});
