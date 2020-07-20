'use strict'

module.exports = (sequelize, DataTypes) => {
  const Floor = sequelize.define('floor', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tableName: 'floor' })

  return Floor
}
