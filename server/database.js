
const mysql = require('mysql');

const mysqlConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database:'new_income'
});

 

module.exports = mysqlConnection;