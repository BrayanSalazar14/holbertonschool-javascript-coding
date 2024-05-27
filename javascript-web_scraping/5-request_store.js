#!/usr/bin/node
const args = process.argv.slice(2);
const request = require('request');
const fs = require('fs');
request(args[0], (err, response, body) => {
  if (err) throw err;
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
  });
});
