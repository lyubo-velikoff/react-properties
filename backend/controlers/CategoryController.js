const db = require('../models')
const { getPagination, getPagingData } = require('../utils/pagination')
const { Category } = db
const Op = db.Sequelize.Op

const handleError = (err, res) => {
    res.status(500).json({
        message: err.message || 'Some error occurred'
    })
}

exports.create = (req, res) => {
    const { name } = req.body
    Category.create({ name })
        .then(data => res.send(data))
        .catch(err => handleError(err, res))
}

exports.findAll = (req, res) => {
    const { page, size, title } = req.query
    const { limit, offset } = getPagination(page, size)

    Category.findAndCountAll({
        limit,
        offset,
        // include: {
        //     model: PropertyPhoto,
        //     include: Property
        // }
    })
        .then(data => res.send(getPagingData(data)))
        .catch(err => handleError(err, res))
}

exports.findOne = (req, res) => {
    Category.findByPk(req.params.categoryId)
        .then(data => res.send(data))
        .catch(err => handleError(err, res))
}

exports.update = (req, res) => {
    const { name } = req.body
    Category.update({ name }, { where : { id: req.params.categoryId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => handleError(err, res))
}

exports.delete = (req, res) => {
    Category.destroy({ where : { id: req.params.categoryId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => handleError(err, res))
}

// Delete all Photo from the database.
exports.deleteAll = (req, res) => {

}