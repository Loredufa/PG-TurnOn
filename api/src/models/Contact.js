const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("contact", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    message: {
      //Fecha y hora
      type: DataTypes.TEXT,
      allowNull: false,
    },
    origin: {
      type: DataTypes.ENUM("web", "movil"),
      allowNull: false,
    }
  });
};