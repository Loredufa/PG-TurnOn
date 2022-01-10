const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('payments', {
    Date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    amount: {
      type: DataTypes.INTEGER,  // reemplazo number por interger
      allowNull: false,
    },
    IdCort: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IdUser: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Idsupplier: {
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
    }
    })
  }
