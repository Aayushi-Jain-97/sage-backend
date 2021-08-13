const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');

//student route
router.get('/', studentController.getStudents);

//get student by id route
router.get('/:id', studentController.getStudentById);

//add student route
router.post('/',studentController.addStudent);

//edit student route
router.put('/',studentController.editStudent);

//delete student route
router.delete('/:id',studentController.deleteStudent);

module.exports = router