const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function getAllFromStudents() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM students");
        rows.forEach(function (row) {
            let student = `Students ID: ${row.Students_ID} First Name: ${row.First_Name} Last Name: ${row.Last_Name} Date Of Birth: ${row.Date_Of_Birth.toLocaleDateString()} Tuition Fees: ${row.Tuition_Fees}`;
            console.log(student);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
    menu.seeList();
}

async function createStudent(student) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO Students (Students_ID,First_Name,Last_Name,Date_Of_Birth,Tuition_Fees) VALUES (?,?,?,?,?)';
        const [result] = await conn.execute(sql,
            [
                student.Students_ID,
                student.First_Name,
                student.Last_Name,
                student.Date_Of_Birth,
                student.Tuition_Fees,
            ]);
        console.log(`${result.affectedRows} student(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.getAllFromStudents = getAllFromStudents;
module.exports.createStudent = createStudent;

