const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("favorites", {
    favorite: {
      // Este campo no se si va
      type: DataTypes.STRING,
    },
    // userId: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    courtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
