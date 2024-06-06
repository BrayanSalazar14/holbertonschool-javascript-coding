const express = require('express');

const app = express();
const port = 1245;

/* eslint-disable */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port);
