const db = require('../util/database');

module.exports = class Course{
    constructor(course_id,name,details){
        this.course_id = course_id;
        this.name = name;
        this.details = details;
    }
    static fetchAllCourses(){
        return db.execute('Select * from tbl_course');
    }

    addCourse(){
        return db.execute('Insert into tbl_course (name,details) values (?,?)',[this.name,this.details]);
    }

    static deleteCourse(id){
        return db.execute('Delete from tbl_course where course_id = ?',[id]);
    }

    static getCourseById(id){
        return db.execute('Select * from tbl_course where course_id = ?',[id]);
    }

    editCourse(){
        return db.execute('Update tbl_course set name=?,details=? where course_id=?',[this.name,this.details,this.course_id]);
    }
}