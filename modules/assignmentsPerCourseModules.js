const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function createAssignmentsPerCourse(assignmentsPerCourse) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO AssignmentsPerCourse (AssignmentsPerCourse_ID,Assignments_ID,Courses_ID) VALUES (?,?,?)';
        const [result] = await conn.execute(sql,
            [
                assignmentsPerCourse.AssignmentsPerCourse_ID,
                assignmentsPerCourse.Assignments_ID,
                assignmentsPerCourse.Courses_ID,
            ]);
        console.log(`${result.affectedRows} Assignment Per Course created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.createAssignmentsPerCourse = createAssignmentsPerCourse;