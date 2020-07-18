const express = require('express')
const bodyParser = require("body-parser");
const IndexRouter = require('./routes/index')
const DBConnection = require('./src/DBConnection')
const app = express()
const PORT = 3001
conn = new DBConnection()

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', IndexRouter)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))