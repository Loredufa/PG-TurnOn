const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('available', {
    days: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    shifths: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
    })
  }