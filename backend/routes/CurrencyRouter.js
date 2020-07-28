const express = require('express')
const { CurrencyController } = require('../controllers')
const { CurrencyValidation } = require('../validations')
const router = express.Router()

router.post('/', CurrencyValidation.create, CurrencyController.create)
router.get('/', CurrencyController.findAll)
router.get('/:currencyId', CurrencyValidation.findOne, CurrencyController.findOne)
router.put('/:currencyId', CurrencyValidation.update, CurrencyController.update)
router.delete('/:currencyId', CurrencyValidation.delete, CurrencyController.delete)

module.exports = router