'use strict'

module.exports = (sequelize, DataTypes) => {
    const Detail = sequelize.define('detail', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'detail' })

    return Detail
}
