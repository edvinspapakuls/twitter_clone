const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'twitter',
    password: 'zv5c5772u3'
})

module.exports = pool.promise()