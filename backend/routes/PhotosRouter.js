const express = require('express')
const { PhotoController } = require('../controlers')
const { param, body } = require('express-validator')
const validate = require('../utils/validation')
const router = express.Router()

router.post('/', validate([
    body('url').exists().withMessage('url is required'),
    body('url').isString().withMessage('url needs to be a string'),
    body('propertyId').exists().withMessage('propertyId is required'),
    body('propertyId').isInt().withMessage('propertyId needs to be an integer'),
]), PhotoController.create)

router.get('/', PhotoController.findAll)

router.get('/:photoId', validate([
    param('photoId').exists().withMessage('Photo ID is required'),
    param('photoId').isInt().withMessage('Photo ID must be a number')
]), PhotoController.findOne)

router.put('/:photoId', validate([
    param('photoId').exists().withMessage('Photo ID is required'),
    param('photoId').isInt().withMessage('Photo ID must be a number'),
    body('url').exists().withMessage('url is required'),
    body('url').isString().withMessage('url needs to be a string'),
    body('propertyId').exists().withMessage('propertyId is required'),
    body('propertyId').isInt().withMessage('propertyId needs to be an integer')
]), PhotoController.update)


router.delete('/:photoId', validate([
    param('photoId').exists().withMessage('Photo ID is required'),
    param('photoId').isInt().withMessage('Photo ID must be a number'),
]), PhotoController.delete)

module.exports = router