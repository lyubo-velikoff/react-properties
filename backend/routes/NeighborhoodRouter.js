const express = require('express')
const { NeighborhoodController } = require('../controllers')

const router = express.Router()

router.post('/', NeighborhoodController.create)
router.get('/', NeighborhoodController.findAll)
router.get('/:id', NeighborhoodController.findOne)
router.put('/:id', NeighborhoodController.update)
router.delete('/:id', NeighborhoodController.delete)
router.delete('/', NeighborhoodController.deleteAll)

module.exports = router