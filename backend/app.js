const express = require('express')
const bodyParser = require("body-parser");
const IndexRouter = require('./routes/index')
const db = require("./models");
const cors = require('cors')
const DBConnection = require('./src/DBConnection')
const PORT = 3001
const app = express()
db.sequelize.sync()
conn = new DBConnection()
app.use(cors())

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', IndexRouter)

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`))