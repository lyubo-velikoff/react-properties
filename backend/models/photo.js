'use strict'

module.exports = (sequelize, DataTypes) => {
    const Photo = sequelize.define('photo', {
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
        propertyId: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, { tableName: 'photo' })

    return Photo
}
