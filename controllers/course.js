const Course = require('../models/course');

exports.getCourse = (req,res,next)=>{
    Course.fetchAllCourses()
    .then((rows)=>{
        // console.log(rows[0]);
        res.status(200).json({
            result: rows[0]
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    })
};

exports.addCourse = (req,res)=>{
    const name = req.body.name;
    const details = req.body.details;
    const course = new Course(null,name,details);
    course.addCourse()
    .then((result)=>{
        res.status(201).json({
            message:'course added successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

exports.getCourseById = (req,res)=>{
    const id = req.params.id;
    Course.getCourseById(id)
    .then((result)=>{
        console.log(result[0])
        res.status(201).json({
            result:result[0]
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

exports.editCourse = (req,res,next)=>{
    const course_id = req.body.course_id;
    const name = req.body.name;
    const details = req.body.details;
    const course = new Course(course_id,name,details);
    course.editCourse()
    .then((result)=>{
        res.status(200).json({
            message:'course edited successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

exports.deleteCourse = (req,res,next)=>{
    const student_id = req.params.id;
    Course.deleteCourse(student_id)
    .then((result)=>{
        res.status(200).json({
            message:'course deleted successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

