const db = require('../util/database');

module.exports = class Student{
    constructor(id,first_name,last_name,dob,contact_no){
        this.student_id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
        this.contact_no = contact_no;
    }

    static fetchAllStudents(){
        return db.execute('Select * from tbl_student');
    }

    addStudent(){
        return db.execute('Insert into tbl_student (first_name,last_name,dob,contact_no) values (?,?,?,?)',[this.first_name,this.last_name,this.dob,this.contact_no]);
    }

    static deleteStudentById(id){
        return db.execute('Delete from tbl_student where student_id = ?',[id]);
    }

    static getStudentById(id){
        return db.execute('Select * from tbl_student where student_id = ?',[id]);
    }

    editStudent(){
        return db.execute('Update tbl_student set first_name=?,last_name=?,dob=?,contact_no=? where student_id=?',[this.first_name,this.last_name,this.dob,this.contact_no,this.student_id]);
    }
};