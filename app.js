const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors());

const studentRoutes = require('./routes/student');
const courseRoutes = require('./routes/course');
const courseRegisterRoutes = require('./routes/course-register');

//Here we are configuring express to use body-parser as middle-ware.
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(express.static(__dirname + '/public'));

app.use('/course',courseRoutes);
app.use('/student',studentRoutes);
app.use('/course-register',courseRegisterRoutes);

app.listen(3000);