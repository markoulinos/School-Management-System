const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function createAssignmentsPerCoursePerStudent(assignmentsPerCoursePerStudent) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO AssignmentsPerCoursePerStudent (AssignmentsPerCoursePerStudent_ID,Assignments_ID,Courses_ID,Students_ID) VALUES (?,?,?,?)';
        const [result] = await conn.execute(sql,
            [
                assignmentsPerCoursePerStudent.AssignmentsPerCoursePerStudent_ID,
                assignmentsPerCoursePerStudent.Assignments_ID,
                assignmentsPerCoursePerStudent.Courses_ID,
                assignmentsPerCoursePerStudent.Students_ID
            ]);
        console.log(`${result.affectedRows} Assignment Per Course Per Student created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.createAssignmentsPerCoursePerStudent = createAssignmentsPerCoursePerStudent;