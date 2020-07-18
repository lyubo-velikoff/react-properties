const express = require('express')
const DBConnection = require('./src/DBConnection')
const app = express()
const PORT = 3001
const conn = new DBConnection()

app.get('/', (req, res) => {
    conn.query('SELECT * from category')
    res.send('Hello World!')
})

app.get('/properties', (req, res) => {
    conn.query('SELECT * from property')
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

app.get('/photos', (req, res) => {
    conn.query('SELECT * from photos')
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))