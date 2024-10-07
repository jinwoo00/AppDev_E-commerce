const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fruit_db'
});

db.connect((err) => {
    if(err)throw err;
    console.log('connected to MySql Database.');
});



module.exports = db;

