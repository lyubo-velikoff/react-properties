const express = require('express')
const { CountyController } = require('../controllers')
const { CountyValidation } = require('../validations')
const router = express.Router()

router.post('/', CountyValidation.create, CountyController.create)
router.get('/', CountyController.findAll)
router.get('/:countyId', CountyValidation.findOne, CountyController.findOne)
router.put('/:countyId', CountyValidation.update, CountyController.update)
router.delete('/:countyId', CountyValidation.delete, CountyController.delete)

module.exports = router