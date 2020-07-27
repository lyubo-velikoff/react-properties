const express = require('express')
const { CategoryController } = require('../controlers')
const { CategoryValidation } = require('../validations')
const router = express.Router()

router.post('/', CategoryValidation.create, CategoryController.create)
router.get('/', CategoryController.findAll)
router.get('/:categoryId', CategoryValidation.findOne, CategoryController.findOne)
router.put('/:categoryId', CategoryValidation.update, CategoryController.update)
router.delete('/:categoryId', CategoryValidation.delete, CategoryController.delete)

module.exports = router