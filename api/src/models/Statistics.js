const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("statistics", {
    courtId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    payments: {
      // Total de pagos
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    clients: {
      // Total de clientes
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bookings: {
      // Cantidad de reservas
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    topHour: {
      //Horario mas solicitado, raro, habria que tener algun acumulador de cada horario para saber cual es la top hour
      type: DataTypes.STRING,
    },
    topDay: {
      type: DataTypes.STRING,
    },
    bookingsAverage: {
      // Cantidad de reservas promedio, en que periodo??
      type: DataTypes.INTEGER,
    },
  });
};
