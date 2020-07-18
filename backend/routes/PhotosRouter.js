const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', (req, res) => {
    conn.query('SELECT * from photos')
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

router.get('/:photoId', (req, res) => {
    const { photoId } = req.params
    conn.query(`SELECT * from photos where id = ${photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

router.put('/:photoId', (req, res) => {
    const { photoId } = req.params
    const { url, property_id } = req.body
    conn.query(`update photos set url = "${url}", property_id = ${property_id} where id = ${photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

router.delete('/:photoId', (req, res) => {
    const { photoId } = req.params
    conn.query(`delete from photos where id = ${photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

router.post('/', (req, res) => {
    const { url, property_id } = req.body
    conn.query(`insert into photos (url, property_id) values ("${url}", ${property_id})`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err}))
})

module.exports = router