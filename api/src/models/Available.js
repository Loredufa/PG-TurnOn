const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("available", {
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    initialTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    endingTime: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idCourt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
