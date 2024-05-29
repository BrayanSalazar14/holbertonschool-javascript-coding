#!/usr/bin/node
const movieId = process.argv[2];
const url = `https://swapi-api.hbtn.io/api/films/${movieId}`;
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const dataApi = JSON.parse(body).characters;
  // Crear un array de promesas
  const promises = dataApi.map(data => {
    return new Promise((resolve, reject) => {
      request(data, (err, response, body) => {
        if (err) return reject(err);
        const character = JSON.parse(body).name;
        resolve(character);
      });
    });
  });
  Promise.all(promises).then(characters => characters.forEach(character => console.log(character)));
});
