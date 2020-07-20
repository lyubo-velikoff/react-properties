'use strict'

module.exports = (sequelize, DataTypes) => {
    const DetailsPlot = sequelize.define('detailsPlot', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'detailsPlot' })

    return DetailsPlot
}
