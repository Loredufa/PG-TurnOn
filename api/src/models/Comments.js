const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("comments", {
    // courtId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    date: {
      //Fecha y hora
      type: DataTypes.STRING,
      allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    reputation: {
      type: DataTypes.FLOAT,
    },
  });
};
