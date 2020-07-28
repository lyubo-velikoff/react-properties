const express = require('express')
const { DetailPlotController } = require('../controllers')
const { DetailPlotValidation } = require('../validations')
const router = express.Router()

router.post('/', DetailPlotValidation.create, DetailPlotController.create)
router.get('/', DetailPlotController.findAll)
router.get('/:id', DetailPlotValidation.findOne, DetailPlotController.findOne)
router.put('/:id', DetailPlotValidation.update, DetailPlotController.update)
router.delete('/:id', DetailPlotValidation.delete, DetailPlotController.delete)

module.exports = router