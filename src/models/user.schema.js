// User schema table - includes id(generated), email, password. Foreign keys - User ID, Show ID

'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('user', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  })
}