const express = require('express');
const { default: AppController } = require('../controllers/AppController');
const { default: StudentsController } = require('../controllers/StudentsController');

const route = express.Router();

/* eslint-disable */
route.get('/', AppController.getHomepage);
route.get('/students', StudentsController.getAllStudents);
route.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default route;
