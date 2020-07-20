'use strict';

module.exports = (sequelize, DataTypes) => {
  const Region = sequelize.define('region', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tableName: 'region' });

  return Region;
};
