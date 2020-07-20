'use strict'

module.exports = (sequelize, DataTypes) => {
    const Currency = sequelize.define('currency', {
        sign: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }, { tableName: 'currency' })

    return Currency
}
