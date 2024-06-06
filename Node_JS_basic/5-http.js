const { createServer } = require('node:http');
const fs = require('fs');

const port = 1245;

const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const response = ['This is the list of our students'];
    fs.readFile(process.argv[2], 'utf-8', (err, data) => {
      if (err) {
        res.statusCode = 500;
        response.push('Cannot load the database');
        res.end(response.join('\n'));
        return;
      }
      const lines = data.trim().split('\n');
      const studentData = lines.slice(1); // Excluir la primera línea (encabezado)
      response.push(`Number of students: ${studentData.length}`);
      const studentsCs = [];
      const studentsSwe = [];
      for (const line of studentData) {
        const [name, , , field] = line.split(',');
        if (field === 'CS') {
          studentsCs.push(name);
        } else if (field === 'SWE') {
          studentsSwe.push(name);
        }
      }
      response.push(`Number of students in CS: ${studentsCs.length}. List: ${studentsCs.join(', ')}`);
      response.push(`Number of students in SWE: ${studentsSwe.length}. List: ${studentsSwe.join(', ')}`);
      res.statusCode = 200;
      res.end(response.join('\n'));
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

/* eslint-disable */
app.listen(port, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;


/* eslint-disable */
app.listen(port, () => {
  console.log('Server is listening on port 1245');
});
module.exports = app;
