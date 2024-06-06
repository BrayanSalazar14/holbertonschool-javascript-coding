const express = require('express');

const app = express();
const port = 1245;

/* eslint-disable */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
  return res.sendStatus(200);
});

app.listen(port);
