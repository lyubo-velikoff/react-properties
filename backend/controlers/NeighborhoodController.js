const db = require("../models")
const { Photo, Property } = db
const Op = db.Sequelize.Op

// Create and Save a new Tutorial
exports.create = (req, res) => {

}

// Retrieve all Neighborhood from the database.
exports.findAll = (req, res) => {
    Photo.findAll({
        include: Property
    })
      .then(data => res.send(data))
      .catch(err => {
          res.status(500).json({
              message: err.message || "Some error occurred while retrieving data."
          })
      })
}

// Find a single Neighborhood with an id
exports.findOne = (req, res) => {

}

// Update a Neighborhood by the id in the request
exports.update = (req, res) => {

}

// Delete a Neighborhood with the specified id in the request
exports.delete = (req, res) => {

}

// Delete all Neighborhood from the database.
exports.deleteAll = (req, res) => {

}