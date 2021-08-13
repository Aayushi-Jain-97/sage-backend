const Student = require('../models/student');

exports.getStudents = (req,res,next)=>{
    Student.fetchAllStudents()
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

exports.addStudent = (req,res)=>{
    console.log(req.body);
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dob = req.body.dob;
    const contact_no = req.body.contact_no;
    const student = new Student(null,first_name,last_name,dob,contact_no);
    student.addStudent()
    .then((result)=>{
        res.status(201).json({
            message:'student added successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

exports.getStudentById = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    Student.getStudentById(id)
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

exports.editStudent = (req,res,next)=>{
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const dob = req.body.dob;
    const contact_no = req.body.contact_no;
    const student_id = req.body.student_id;
    const student = new Student(student_id,first_name,last_name,dob,contact_no);
    student.editStudent()
    .then((result)=>{
        res.status(200).json({
            message:'student edited successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

exports.deleteStudent = (req,res,next)=>{
    const student_id = req.params.id;
    Student.deleteStudentById(student_id)
    .then((result)=>{
        res.status(200).json({
            message:'student deleted successfully'
        })
    })
    .catch((err)=>{
        console.log(err);
        res.status(403).json(error);
    });
}

