const express = require('express')
const NeighborhoodController = require('../controlers/NeighborhoodController')
const router = express.Router()

// Create a new Neighborhood
router.post('/', NeighborhoodController.create);

// Retrieve all Neighborhoods
router.get('/', NeighborhoodController.findAll);

// Retrieve a single Neighborhood with id
router.get('/:id', NeighborhoodController.findOne);

// Update a Neighborhood with id
router.put('/:id', NeighborhoodController.update);

// Delete a Neighborhood with id
router.delete('/:id', NeighborhoodController.delete);

// Delete all Neighborhoods
router.delete('/', NeighborhoodController.deleteAll);

module.exports = router