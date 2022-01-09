const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("bookings", {
    courtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    availableId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookingCode: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
