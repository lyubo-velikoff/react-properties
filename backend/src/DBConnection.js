const mysql = require('mysql')
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env
let conn = null

class DBConnection {
    
    constructor() {
        conn = mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_DATABASE
        })
        this.start()
    }
    query(query) {
        return new Promise((resolve, reject) => {
            conn.query(query, (err, rows, fields) => {
                if (err) {
                    reject(err)
                    throw err
                }
                resolve(rows)
            })
        })
    }

    start() {
        conn.connect()

    }

    stop() {
        conn.end()
    }
}

module.exports = DBConnection