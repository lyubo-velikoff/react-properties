const express = require('express')
const { NeighborhoodController } = require('../controllers')
const { NeighborhoodValidation } = require('../validations')
const router = express.Router()

router.post('/', NeighborhoodValidation.create, NeighborhoodController.create)
router.get('/', NeighborhoodController.findAll)
router.get('/:id', NeighborhoodValidation.findOne, NeighborhoodController.findOne)
router.put('/:id', NeighborhoodValidation.update, NeighborhoodController.update)
router.delete('/:id', NeighborhoodValidation.delete, NeighborhoodController.delete)

module.exports = router