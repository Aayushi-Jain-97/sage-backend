const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course');

//course route
router.get('/',courseController.getCourse);

//course route
router.get('/:id',courseController.getCourseById);

//add course route
router.post('/',courseController.addCourse);

//edit course route
router.put('/',courseController.editCourse);

//delete course route
router.delete('/:id',courseController.deleteCourse);

module.exports = router