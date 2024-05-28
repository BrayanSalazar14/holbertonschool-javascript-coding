#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const data = JSON.parse(body).results;
  let count = 0;
  data.filter(dt => {
    for (const char of dt.characters) if (char.includes('/18/')) count++;
    return count;
  });
  console.log(count);
});
