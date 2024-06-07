const fs = require('fs');
const express = require('express');

const app = express();
const port = 1245;

function cvsToJson(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
    const jsonData = [];
    const rows = data.split('\n');
    const headers = rows[0].split(',');

    for (let i = 1; i < rows.length; i++) {
      const values = rows[i].split(',');
      const object = {};

      for (let j = 0; j < headers.length; j++) {
        const key = headers[j];
        const value = values[j];
        object[key] = value;
      }
      jsonData.push(object);
    }
    return jsonData;
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

/* eslint-disable */
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const response = ['This is the list of our students'];
  try {
    const jsonData = cvsToJson(process.argv[2]);
    const studentsCs = [];
    const studentsSwe = [];
    jsonData.forEach((students) => {
      if (students.field === 'CS') studentsCs.push(students.firstname);
      else if (students.field === 'SWE') studentsSwe.push(students.firstname);
    });
    response.push(`Number of students: ${jsonData.length}`);
    response.push(`Number of students in CS: ${studentsCs.length}. List: ${studentsCs.join(', ')}`);
    response.push(`Number of students in SWE: ${studentsSwe.length}. List: ${studentsSwe.join(', ')}`);
    res.send(response.join('\n'));
    return res.sendStatus(200);
  } catch (error) {
    res.send('This is the list of our students\nCannot load the database');
    res.sendStatus(500);
  }
});

app.listen(port);

module.exports = app;