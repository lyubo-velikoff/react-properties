'use strict'
const {
    Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
    class Neighborhood extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    };
    Neighborhood.init({
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Neighborhood',
        tableName: 'neighborhood'
    })
    return Neighborhood
}