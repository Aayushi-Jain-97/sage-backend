const express = require('express');
const router = express.Router();
const courseRegisterController = require('../controllers/course-register');

//course-register route
router.post('/', courseRegisterController.courseRegister);

//get reports
router.get('/report', courseRegisterController.getReport);

module.exports = router