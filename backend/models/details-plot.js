'use strict'

module.exports = (sequelize, DataTypes) => {
    const DetailsPlot = sequelize.define('detailPlot', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'detailPlot' })

    return DetailsPlot
}
