const CourseRegisterArray = require('../models/course-register');

exports.getReport = (req,res,next)=>{
    CourseRegisterArray.fetchReport()
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

exports.courseRegister = (req,res)=>{
    const courseRegisterStudent = req.body.courseRegisterStudent;
    console.log(courseRegisterStudent);
    const courseregister = new CourseRegisterArray();
    for(let i=0;i<courseRegisterStudent.length;i++){
        console.log("inside here");
        courseregister.addCourseRegister(courseRegisterStudent[i].sname,courseRegisterStudent[i].cname)
    }
    courseregister.courseRegisterToDB()
    .then((result)=>{
        res.status(201).json({
            message:'course added successfully for students'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}


