const express = require('express')
const DBConnection = require('./src/DBConnection')
const IndexRouter = require('./routes/index')
const app = express()
const PORT = 3001
conn = new DBConnection()

app.use('/api', IndexRouter)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))