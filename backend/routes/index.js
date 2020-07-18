const express = require('express')
const PropertyRouter = require('./PropertyRouter')
const CategoryRouter = require('./CategoryRouter')
const PhotosRouter = require('./PhotosRouter')
const router = express.Router()

router.use('/properties', PropertyRouter)

router.use('/categories', CategoryRouter)

router.use('/photos', PhotosRouter)

module.exports = router