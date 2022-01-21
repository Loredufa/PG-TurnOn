const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define("payments", {
    status: {
      type: DataTypes.ENUM("created", "processing", "cancelled", "completed"),
      // allowNull: false,
    },
    payment_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    payment_status: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    merchant_order_id: {
      type: DataTypes.BIGINT,
      defaultValue: 0,
    },
    price: {
      type: DataTypes.FLOAT,
      // allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
    amount: {
      type: DataTypes.STRING,
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
    },
  });
};

// Public Key  TEST-ee0ab28d-f04f-452c-af94-c03376e90d6d
// Access token  TEST-7424882986110024-011820-a061299477783feb815b4957329eb7fc-1059164600

// usuarios de prueba
// Comprador  {"id":1059179024,"nickname":"TEST6TGI6VJH","password":"qatest3464","site_status":"active","email":"test_user_21187182@testuser.com"}

// vendedor {"id":1059164600,"nickname":"TETE1332167","password":"qatest4350","site_status":"active","email":"test_user_66070748@testuser.com"}
