const express = require('express')
const { param } = require('express-validator')
const validate = require('../utils/validation')
const router = express.Router()

//Get all photos
router.get('/', (req, res) => {
    conn.query('SELECT * from photos')
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err }))
})

// Get photo by ID
router.get('/:photoId', validate([
    param('photoId').exists().withMessage('Photo ID is required'),
    param('photoId').isInt().withMessage('Photo ID must be a number')
]), async (req, res, next) => {
    conn.query(`SELECT * from photos where id = ${req.params.photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err }))
})

//Update a photo
router.put('/:photoId', (req, res) => {
    const { photoId } = req.params
    const { url, property_id } = req.body
    conn.query(`update photos set url = "${url}", property_id = ${property_id} where id = ${photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err }))
})


// Delete photo by ID
router.delete('/:photoId', (req, res) => {
    const { photoId } = req.params
    conn.query(`delete from photos where id = ${photoId}`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err }))
})

// Add photo
router.post('/', (req, res) => {
    const { url, property_id } = req.body
    conn.query(`insert into photos (url, property_id) values ("${url}", ${property_id})`)
        .then(data => res.json({ ...data }))
        .catch(err => res.json({ result: 'error', description: err }))
})

module.exports = router