const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("supplier", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    access: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuit: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    businessname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      defaultValue:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reputation: {
      type: DataTypes.FLOAT,
      defaultValue: 0
      // allowNull: false,
    },
    comments: {
      type: DataTypes.TEXT,
      // allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
