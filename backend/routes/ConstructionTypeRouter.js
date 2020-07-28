const express = require('express')
const { ConstructionTypeController } = require('../controllers')
const { ConstructionTypeValidation } = require('../validations')
const router = express.Router()

router.post('/', ConstructionTypeValidation.create, ConstructionTypeController.create)
router.get('/', ConstructionTypeController.findAll)
router.get('/:constructionTypeId', ConstructionTypeValidation.findOne, ConstructionTypeController.findOne)
router.put('/:constructionTypeId', ConstructionTypeValidation.update, ConstructionTypeController.update)
router.delete('/:constructionTypeId', ConstructionTypeValidation.delete, ConstructionTypeController.delete)

module.exports = router