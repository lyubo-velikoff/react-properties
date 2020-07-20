'use strict'

module.exports = (sequelize, DataTypes) => {
    const FloorCount = sequelize.define('floorCount', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'floorCount' })

    return FloorCount
}
