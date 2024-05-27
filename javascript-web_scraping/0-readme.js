#!/usr/bin/node
const fs = require('fs');
const arg = process.argv[2];
fs.readFile(arg, (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
