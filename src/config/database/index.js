const mysql = require('mysql2');

const pool = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'blog-dev',
});
const connection = pool.promise();
module.exports = connection;
