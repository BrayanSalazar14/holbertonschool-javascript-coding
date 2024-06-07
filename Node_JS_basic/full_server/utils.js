const fs = require('fs').promises;

/* eslint-disable */
export default function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8')
      .then((student) => {
        const students = {};
        const rows = student.trim().split('\n').slice(1);
        rows.forEach((student) => {
            const [name, , , field] = student.split(',');
            if (field) {
                if (!students[field]) students[field] = [];
            }
            students[field].push(name);
        });
        resolve(students);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

