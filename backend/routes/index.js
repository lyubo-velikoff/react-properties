const express = require('express')
const PropertyRouter = require('./PropertyRouter')
const CategoryRouter = require('./CategoryRouter')
const PhotosRouter = require('./PhotosRouter')
const NeighborhoodRouter = require('./NeighborhoodRouter')
const router = express.Router()

router.use('/properties', PropertyRouter)
router.use('/categories', CategoryRouter)
router.use('/photos', PhotosRouter)
router.use('/neighborhoods', NeighborhoodRouter)

module.exports = router