const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function createStudentsPerCourse(studentsPerCourse) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO StudentsPerCourse (StudentsPerCourse_id,Students_ID,Courses_ID) VALUES (?,?,?)';
        const [result] = await conn.execute(sql,
            [
                studentsPerCourse.StudentsPerCourse_id,
                studentsPerCourse.Students_ID,
                studentsPerCourse.Courses_ID,
            ]);
        console.log(`${result.affectedRows} Student Per Course created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.createStudentsPerCourse = createStudentsPerCourse;