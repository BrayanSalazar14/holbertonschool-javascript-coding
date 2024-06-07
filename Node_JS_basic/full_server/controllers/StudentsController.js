import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      let response = 'This is the list of our students\n';
      const student = await readDatabase('./datbase.csv');
      Object.entries(student).forEach(([key, value]) => {
        response += `Number of students in ${key}: ${student[key].length}. List: ${value.join(', ')}\n`;
      });
      res.status(200).send(response.trim());
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') res.status(500).send('Major parameter must be CS or SWE');
    try {
      const students = await readDatabase('./database.csv');
      const response = `List: ${students[`${major}`].join(', ').trim()}`;
      res.status(200).send(response);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
