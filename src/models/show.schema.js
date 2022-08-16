// Show schema table - includes id(generated), title, image, description, average rating, genre, UUID (note - include UUID for better data management)

'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('show', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING, 
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // REVISIT - where is this calculated?
    avgRating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // UUID from docs - unsure primary key?
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      // primaryKey: true, //REVISIT?
    }
  })
}