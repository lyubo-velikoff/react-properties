'use strict'

module.exports = (sequelize, DataTypes) => {
    const ConstructionType = sequelize.define('constructionType', {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { tableName: 'constructionType' })

    return ConstructionType
}
