const mysql = require('mysql')

const conn = mysql.createConnection({
    host: '127.0.0.1',
    database: 'db_tickets',
    user: 'root',
    password: ''
})

conn.connect(function (error) {
    if (error) {
        throw error
    } else {
        console.log("Conexión exitosa")
    }
})

// conn.end()

module.exports = {
    conn
}