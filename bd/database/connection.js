const mysql = require('mysql2/promise')

const connectToDatabase = () => {
    return  mysql.createConnection({
        port:3306,
        database: 'products',
        password: 'lemni123',
        user: 'root',
        waitForConnections: true,
    })
}



module.exports = connectToDatabase;