const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("rating", {
    five: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    four: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    three: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    two: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
    one: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  });
};