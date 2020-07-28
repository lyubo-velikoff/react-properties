const express = require('express')
const { FurnishedController } = require('../controllers')
const { FurnishedValidation } = require('../validations')
const router = express.Router()

router.post('/', FurnishedValidation.create, FurnishedController.create)
router.get('/', FurnishedController.findAll)
router.get('/:id', FurnishedValidation.findOne, FurnishedController.findOne)
router.put('/:id', FurnishedValidation.update, FurnishedController.update)
router.delete('/:id', FurnishedValidation.delete, FurnishedController.delete)

module.exports = router