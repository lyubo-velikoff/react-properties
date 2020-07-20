'use strict';

module.exports = (sequelize, DataTypes) => {
  const Furnished = sequelize.define('furnished', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, { tableName: 'furnished' });

  return Furnished;
};
