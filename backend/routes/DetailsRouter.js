const express = require('express')
const { DetailController } = require('../controllers')
const { DetailValidation } = require('../validations')
const router = express.Router()

router.post('/', DetailValidation.create, DetailController.create)
router.get('/', DetailController.findAll)
router.get('/:detailId', DetailValidation.findOne, DetailController.findOne)
router.put('/:detailId', DetailValidation.update, DetailController.update)
router.delete('/:detailId', DetailValidation.delete, DetailController.delete)

module.exports = router