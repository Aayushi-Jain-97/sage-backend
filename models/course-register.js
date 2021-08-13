const db = require('../util/database');

module.exports = class CourseRegisterArray{

    constructor(){
        this.course_register_array = [];
    }

    static fetchReport(){
        return db.execute(`select CONCAT (first_name," ",last_name) as sname, c.name as cname from tbl_student s join tbl_course_register cr on s.student_id=cr.stu_id join tbl_course c on c.course_id=cr.c_id`);
    }

    async courseRegisterToDB(){
        console.log(this.course_register_array.length);
        let finalArray = [];
        for(let i=0;i<this.course_register_array.length;i++){
            finalArray.push(db.execute('Insert into tbl_course_register (stu_id,c_id) values (?,?)',[this.course_register_array[i].student_id,this.course_register_array[i].course_id]));
        }
        return await Promise.all(finalArray);
    }

    addCourseRegister(student_id,course_id){
        console.log("came here for course register array",student_id,course_id);
        let cr = new CourseRegister(null,student_id,course_id)
        this.course_register_array.push(cr);
        console.log(this.course_register_array.length);
    }
   
};

class CourseRegister{
    constructor(id,student_id,course_id){
        this.course_register_id = id;
        this.student_id = student_id;
        this.course_id = course_id;
    }
}