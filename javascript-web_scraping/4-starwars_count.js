#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const data = JSON.parse(body).results;
  const idWedgeAntilles = '18';
  let count = 0;
  for (const film of data) {
    if (film.characters.includes(`https://swapi-api.hbtn.io/api/people/${idWedgeAntilles}/`)) count++;
  }
  console.log(count);
});
