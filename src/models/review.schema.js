// Review schema table - includes id(generated), rating, review

'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('reviews', {
    rating: {
      type: DataTypes.ENUM, // revisit - POSTGRES ONLY
      values: ['1', '2', '3', '4', '5'],
      allowNull: false,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    showId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  })
}