'use strict';

module.exports = (sequelize, DataTypes) => {
  const County = sequelize.define('county', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tableName: 'county' });

  return County;
};
