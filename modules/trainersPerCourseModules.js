const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function createTrainersPerCourse(TrainersPerCourse) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO TrainersPerCourse (TrainersPerCourse_ID,Trainers_ID,Courses_ID) VALUES (?,?,?)';
        const [result] = await conn.execute(sql,
            [
                TrainersPerCourse.TrainersPerCourse_ID,
                TrainersPerCourse.Trainers_ID,
                TrainersPerCourse.Courses_ID,
            ]);
        console.log(`${result.affectedRows} Trainer Per Course created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.createTrainersPerCourse = createTrainersPerCourse;