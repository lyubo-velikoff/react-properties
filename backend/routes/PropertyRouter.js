const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    conn.query('SELECT * from property')
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

module.exports = router