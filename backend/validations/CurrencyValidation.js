const validate = require('../utils/validation')
const { param, body } = require('express-validator')

exports.create = validate([
    body('sign').escape().trim().exists().isString(),
])

exports.findOne = validate([
    param('currencyId').exists().isInt()
])

exports.update = validate([
    body('sign').escape().trim().exists().isString(),
])

exports.delete = validate([
    param('currencyId').exists().isInt()
])