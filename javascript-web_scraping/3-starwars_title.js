#!/usr/bin/node
const args = process.argv.slice(2);
const request = require('request');
const url = `https://swapi-api.hbtn.io/api/films/${args[0]}`;
request(url, (err, response, body) => {
  if (err) throw err;
  console.log(JSON.parse(body).title);
});
