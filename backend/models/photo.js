'use strict'

module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('photo', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    }, { tableName: 'photo' })

    Photo.associate = models => {
        const { PropertyPhoto, Property } = models
        Photo.belongsToMany(Property, {
            through: PropertyPhoto
        })
        Photo.hasMany(PropertyPhoto)
    }

    return Photo
}
