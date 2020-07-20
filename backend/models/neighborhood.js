'use strict'

module.exports = (sequelize, DataTypes) => {
    const Furnished = sequelize.define('neighborhood', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'neighborhood' })

    return Furnished
}
