const mysql = require('mysql2/promise');
const menu = require('../menu');
const configDetails = require('../config');

async function getAllFromTrainers() {
    try {
        const conn = await mysql.createConnection(configDetails);
        const [rows, fields] = await conn.query("SELECT * FROM trainers");
        rows.forEach(function (row) {
            let trainer = `Trainers ID: ${row.Trainers_ID} First Name: ${row.First_Name} Last Name: ${row.Last_Name} Subject: ${row.Subject}`;
            console.log(trainer);
        });
        await conn.end();
    } catch (ex) {
        console.log(`Exception: ${ex.message}`);
        process.exit();
    }
    menu.seeList();
}

async function createTrainer(trainer) {
    try {
        const conn = await mysql.createConnection(configDetails);
        let sql = 'INSERT INTO Trainers (Trainers_ID,First_Name,Last_Name,Subject) VALUES (?,?,?,?)';
        const [result] = await conn.execute(sql,
            [
                trainer.Trainers_ID,
                trainer.First_Name,
                trainer.Last_Name,
                trainer.Subject
            ]);
        console.log(`${result.affectedRows} trainer(s) created`);
        await conn.end();
    } catch (ex) {
        console.log(ex.message);
        process.exit();
    }
    menu.addList();
}

module.exports.getAllFromTrainers = getAllFromTrainers;
module.exports.createTrainer = createTrainer;