const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('available', {
    days: {
      type: DataTypes.DATEONLY,  // año-mes-dia  ej 2022-01-20
      allowNull: false,
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
     },
    })
  }