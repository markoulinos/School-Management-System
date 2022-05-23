const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function getAllFromAssignments() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM assignments");
        rows.forEach(function (row) {
            let course = `Assignments ID: ${row.Assignments_ID} Title: ${row.Title} Description: ${row.Description} Sub Date: ${row.Sub_Date_Time.toLocaleDateString()} Oral Mark: ${row.Oral_Mark} Total Mark: ${row.Total_Mark}`;
            console.log(course);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
    menu.seeList();
}

async function createAssignment(assignment) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO Assignments (Assignments_ID,Title,Description,Sub_Date_Time,Oral_Mark,Total_Mark) VALUES (?,?,?,?,?,?)';
        const [result] = await conn.execute(sql,
            [
                assignment.Assignments_ID,
                assignment.Title,
                assignment.Description,
                assignment.Sub_Date_Time,
                assignment.Oral_Mark,
                assignment.Total_Mark
            ]);
        console.log(`${result.affectedRows} assignment(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.getAllFromAssignments = getAllFromAssignments;
module.exports.createAssignment = createAssignment;