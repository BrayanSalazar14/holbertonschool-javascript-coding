const { createServer } = require('node:http');

const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

/* eslint-disable */
app.listen(port, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
