const fs = require('fs');

function countStudents(file) {
  try {
    const data = fs.readFileSync(file, 'utf-8');
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
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
