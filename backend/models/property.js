'use strict'

module.exports = (sequelize, DataTypes) => {
    const Property = sequelize.define('property', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
    // description: {
    //   type: DataTypes.TEXT
    // },
    // price: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // currencyId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // },
    // countyId: {
    //   type: DataTypes.INTEGER
    // },
    // regionId: {
    //   type: DataTypes.INTEGER
    // },
    // neighborhoodId: {
    //   type: DataTypes.INTEGER
    // },
    // floorId: {
    //   type: DataTypes.INTEGER
    // },
    // floorCountId: {
    //   type: DataTypes.INTEGER
    // },
    // area: {
    //   type: DataTypes.INTEGER
    // },
    // yard: {
    //   type: DataTypes.INTEGER
    // },
    // constructionTypeId: {
    //   type: DataTypes.INTEGER
    // },
    // regulation: {
    //   type: DataTypes.INTEGER
    // },
    // phone: {
    //   type: DataTypes.STRING
    // },
    // furnishedId: {
    //   type: DataTypes.INTEGER
    // }
    }, { tableName: 'property' })

    return Property
}
