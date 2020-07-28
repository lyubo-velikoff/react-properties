const express = require('express')
const { FloorController } = require('../controllers')
const { FloorValidation } = require('../validations')
const router = express.Router()

router.post('/', FloorValidation.create, FloorController.create)
router.get('/', FloorController.findAll)
router.get('/:id', FloorValidation.findOne, FloorController.findOne)
router.put('/:id', FloorValidation.update, FloorController.update)
router.delete('/:id', FloorValidation.delete, FloorController.delete)

module.exports = router