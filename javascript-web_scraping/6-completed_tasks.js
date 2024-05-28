#!/usr/bin/node
const url = process.argv[2];
const request = require('request');
request(url, (err, response, body) => {
  if (err) throw err;
  const dataApi = JSON.parse(body);
  const obj = {};
  const userIds = new Set();
  const userCompleted = dataApi.filter(dt => {
    return dt.completed === true;
  });
  for (const usrId of userCompleted) userIds.add(usrId.userId);
  for (const data of userIds) {
    let values = 0;
    for (const user of userCompleted) {
      if (user.userId === data) values++;
    }
    obj[`${data}`] = values;
  }
  console.log(obj);
});
