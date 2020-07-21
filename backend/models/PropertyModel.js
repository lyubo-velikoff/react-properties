'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
            Property.belongsToMany(models.Photo, {
                through: models.PropertyPhoto,
                foreignKey: 'propertyId'
            })
            Property.hasMany(models.PropertyPhoto, { foreignKey: 'propertyId' })
        }
    };
    Property.init({
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
    }, {
        sequelize,
        modelName: 'Property',
        tableName: 'property'
    })
    return Property
}