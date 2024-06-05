const fs = require('fs').promises;

function countStudents(file) {
  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8')
      .then((data) => {
        const lines = data.trim().split('\n');
        console.log(`Number of students: ${lines.length - 1}`);
        const studentsCs = [];
        const studentsSwe = [];
        for (const index of lines) {
          if (index.includes('CS')) {
            studentsCs.push(index.slice(0, index.indexOf(',')));
          } else if (index.includes('SWE')) {
            studentsSwe.push(index.slice(0, index.indexOf(',')));
          }
        }
        console.log(`Number of students in CS: ${studentsCs.length}. List: ${studentsCs.join(', ')}`);
        console.log(`Number of students in SWE: ${studentsSwe.length}. List: ${studentsSwe.join(', ')}`);
        resolve();
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

module.exports = countStudents;
