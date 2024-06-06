const { createServer } = require('node:http');
const fs = require('fs');

const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.statusCode = 200;
    const response = [];
    response.push('This is the list of our students');
    const data = fs.readFileSync(process.argv[2], 'utf-8');
    const lines = data.trim().split('\n');
    response.push(`Number of students: ${lines.length - 1}`);
    const studentsCs = [];
    const studentsSwe = [];
    for (const index of lines) {
      if (index.includes('CS')) {
        studentsCs.push(index.slice(0, index.indexOf(',')));
      } else if (index.includes('SWE')) {
        studentsSwe.push(index.slice(0, index.indexOf(',')));
      }
    }
    response.push(`Number of students in CS: ${studentsCs.length}. List: ${studentsCs.join(', ')}`);
    response.push(`Number of students in SWE: ${studentsSwe.length}. List: ${studentsSwe.join(', ')}`);
    res.end(response.join('\n'));
  }
});

/* eslint-disable */
app.listen(port, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
