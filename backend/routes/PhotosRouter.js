const express = require('express')
const { PhotoController } = require('../controlers')
const { param, body } = require('express-validator')
const validate = require('../utils/validation')
const router = express.Router()

router.post('/', validate([
    body('url').exists().isString()
]), PhotoController.create)

router.post('/assign', validate([
    body('photoId').exists().isInt(),
    body('propertyId').exists().isInt(),
]), PhotoController.assign)

router.get('/', PhotoController.findAll)

router.get('/:photoId', validate([
    param('photoId').exists().isInt()
]), PhotoController.findOne)

router.put('/:photoId', validate([
    param('photoId').exists().isInt(),
    body('url').exists().isString()
]), PhotoController.update)

router.delete('/:photoId', validate([
    param('photoId').exists().isInt()
]), PhotoController.delete)

module.exports = router