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
        description: {
            type: DataTypes.TEXT
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        area: {
            type: DataTypes.INTEGER
        },
        yard: {
            type: DataTypes.INTEGER
        },
        regulation: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        phone: {
            type: DataTypes.STRING,
            defaultValue: '0895 606 165'
        },
        currencyId: {
            type: DataTypes.INTEGER,
            onDelete: 'CASCADE',
            references: {
                model: {
                    tableName: 'currency',
                    schema: 'avalon'
                },
                key: 'id'
            },
            allowNull: true
        },
    }, {
        sequelize,
        modelName: 'Property',
        tableName: 'property'
    })
    return Property
}