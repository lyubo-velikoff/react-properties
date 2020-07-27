const express = require('express')
const { RegionController } = require('../controlers')
const { RegionValidation } = require('../validations')
const router = express.Router()

router.post('/', RegionValidation.create, RegionController.create)
router.get('/', RegionController.findAll)
router.get('/:regionId', RegionValidation.findOne, RegionController.findOne)
router.put('/:regionId', RegionValidation.update, RegionController.update)
router.delete('/:regionId', RegionValidation.delete, RegionController.delete)

module.exports = router