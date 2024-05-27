#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const data = JSON.parse(body).results;
  const wedgeAntilles = 'https://swapi-api.hbtn.io/api/people/18/';
  let count = 0;
  for (const property of data) {
    if (property.characters.includes(wedgeAntilles)) count++;
  }
  console.log(count);
});
