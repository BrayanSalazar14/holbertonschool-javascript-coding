#!/usr/bin/node
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const dataApi = JSON.parse(body).characters;
  const promises = dataApi.map(property => {
    return new Promise((resolve, reject) => {
      request(property, (err, response, body) => {
        if (err) throw err;
        const character = JSON.parse(body).name;
        resolve(character);
      });
    });
  });
  Promise.all(promises).then(promise => promise.forEach(character => console.log(character)));
});
