const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("payments", {
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    idCourt: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idSupplier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reservationCode: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
