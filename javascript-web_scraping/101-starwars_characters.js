#!/usr/bin/node
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const dataApi = JSON.parse(body).characters;
  for (const data of dataApi) {
    request(data, (err, response, body) => {
      if (err) throw err;
      const character = JSON.parse(body).name;
      console.log(character);
    });
  }
});
