const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function getAllFromCourses() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM courses");
        rows.forEach(function (row) {
            let course = `Courses ID: ${row.Courses_ID} Title: ${row.Title} Stream: ${row.Stream} Type: ${row.Type} Start Date: ${row.Start_Date.toLocaleDateString()} End Date: ${row.End_Date.toLocaleDateString()}`;
            console.log(course);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
    menu.seeList();
}

async function createCourse(course) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO Courses (Courses_ID,Title,Stream,Type,Start_Date,End_Date) VALUES (?,?,?,?,?,?)';
        const [result] = await conn.execute(sql,
            [
                course.Courses_ID,
                course.Title,
                course.Stream,
                course.Type,
                course.Start_Date,
                course.End_Date
            ]);
        console.log(`${result.affectedRows} course created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.getAllFromCourses = getAllFromCourses;
module.exports.createCourse = createCourse;