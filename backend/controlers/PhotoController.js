const db = require("../models")
const { getPagination, getPagingData } = require('../utils/pagination')
const { Photo, Property } = db
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {
    const { url, propertyId } = req.body
    // Save Tutorial in the database
    Photo.create({ url, propertyId })
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while creating the data."
            })
        })
}

// Retrieve all Photo from the database.
exports.findAll = (req, res) => {
    const { page, size, title } = req.query
    const { limit, offset } = getPagination(page, size);

    Photo.findAndCountAll({ limit, offset, include: Property })
        .then(data => res.send(getPagingData(data)))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving data."
            })
        })
}

// Find a single Photo with an id
exports.findOne = (req, res) => {
    Photo.findByPk(req.params.photoId)
        .then(data => res.send(data))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while retrieving data."
            })
        })
}

// Update a Photo by the id in the request
exports.update = (req, res) => {
    const { url, propertyId } = req.body
    Photo.update({ url, propertyId }, { where : { id: req.params.photoId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while updating data."
            })
        })
}

// Delete a Photo with the specified id in the request
exports.delete = (req, res) => {
    Photo.destroy({ where : { id: req.params.photoId } })
        .then(data => res.json({ result: data == 1 ? 'Success' : 'failed' }))
        .catch(err => {
            res.status(500).json({
                message: err.message || "Some error occurred while deleting data."
            })
        })
}

// Delete all Photo from the database.
exports.deleteAll = (req, res) => {

}