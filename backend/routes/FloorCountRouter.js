const express = require('express')
const { FloorCountController } = require('../controllers')
const { FloorCountValidation } = require('../validations')
const router = express.Router()

router.post('/', FloorCountValidation.create, FloorCountController.create)
router.get('/', FloorCountController.findAll)
router.get('/:id', FloorCountValidation.findOne, FloorCountController.findOne)
router.put('/:id', FloorCountValidation.update, FloorCountController.update)
router.delete('/:id', FloorCountValidation.delete, FloorCountController.delete)

module.exports = router