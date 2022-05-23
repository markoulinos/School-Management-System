const mysql = require('mysql2/promise');
const _ = require('lodash');
const menu = require('../menu');
const configDetails = require('../config');

async function printAllFromStudentsPerCourse() {
    try {
        const conn = await mysql.createConnection(configDetails);

        let sql = `SELECT * FROM Students_Per_Course`;
        const [rows, fields] = await conn.query(sql);
        let rowsGroupedByTitle = _.groupBy(rows, 'Title');
        _.forEach(rowsGroupedByTitle, function (textRow, key) {
            console.log(key);
            for (let item of textRow) {
                console.log(`\t First Name: ${item.First_Name} Last Name: ${item.Last_Name} Stream: ${item.Stream} Type: ${item.Type}`);
            }
        });

        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.filteredLists();
}


async function printAllFromTrainersPerCourse() {
    try {
        const conn = await mysql.createConnection(configDetails);

        let sql = `SELECT * FROM Trainers_Per_Course`;
        const [rows, fields] = await conn.query(sql);
        let rowsGroupedByTitle = _.groupBy(rows, 'Title');
        _.forEach(rowsGroupedByTitle, function (textRow, key) {
            console.log(key);
            for (let item of textRow) {
                console.log(`\t First Name: ${item.First_Name} Last Name: ${item.Last_name} Stream: ${item.Stream} Type: ${item.Type}`);
            }
        });

        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.filteredLists();
}


async function printAllFromAssignmentsPerCourse() {
    try {
        const conn = await mysql.createConnection(configDetails);

        let sql = `SELECT * FROM Assignments_Per_Course`;
        const [rows, fields] = await conn.query(sql);
        let rowsGroupedByTitle = _.groupBy(rows, 'Title');
        _.forEach(rowsGroupedByTitle, function (textRow, key) {
            console.log(key);
            for (let item of textRow) {
                console.log(`\t Description: ${item.Description} Sub Date: ${item.Sub_Date_Time.toLocaleDateString()} Stream: ${item.Stream} Type: ${item.Type}`);
            }
        });

        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.filteredLists();
}


async function printAllAssignmentsPerCoursePerStudent() {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = `SELECT * FROM Assignments_Per_Course_Per_Student`;
        const [rows, fields] = await conn.query(sql);
        let rowsGroupByDTitle = _.groupBy(rows, 'Title');
        _.forEach(rowsGroupByDTitle, function (textRow, key) {
            console.log(key);
            let rowsGroupedByFull_name = _.groupBy(textRow, 'Full_name');
            _.forEach(rowsGroupedByFull_name, function (textrow1, key1) {
                console.log(`\t${key1}`);
                for (let item of textrow1) {
                    console.log(`\t\t${item.Description}`);
                }
            });
        })
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.filteredLists();
}


async function printAllStudentsWithMoreThanOneCourses() {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = `SELECT * FROM More_Than_One_Courses`;
        const [rows, fields] = await conn.query(sql);
        let rowsGroupedByFull_name = _.groupBy(rows, 'Full_name');
        _.forEach(rowsGroupedByFull_name, function (textRow, key) {
            console.log(key);
            let rowsGroupByDTitle = _.groupBy(textRow, 'title');
            _.forEach(rowsGroupByDTitle, function (textrow1, key1) {
                for (let item of textrow1) {
                    console.log(`\t\t${item.Title}`);
                }
            });
        })
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.filteredLists();
}

module.exports.printAllFromStudentsPerCourse = printAllFromStudentsPerCourse;
module.exports.printAllFromTrainersPerCourse = printAllFromTrainersPerCourse;
module.exports.printAllFromAssignmentsPerCourse = printAllFromAssignmentsPerCourse;
module.exports.printAllAssignmentsPerCoursePerStudent = printAllAssignmentsPerCoursePerStudent;
module.exports.printAllStudentsWithMoreThanOneCourses = printAllStudentsWithMoreThanOneCourses;