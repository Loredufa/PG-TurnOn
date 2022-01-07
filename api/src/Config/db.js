require("dotenv").config();
const { Sequelize } = require("sequelize");
const { dbUser, dbHost, dbPassword, dbName } = require("./config");
const UserModel = require("../models/User");
const ProveedorModel = require("../models/Proveedor");
const AvailableModel = require("../models/Available");
const FieldModel = require("../models/Field");

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

// console.log("dbUser", dbUser);
// console.log("dbHost", dbHost);
// console.log("dbPassword", dbPassword);
// console.log("dbName", dbName);
// console.log("process.env", process.env);

const User = UserModel(sequelize);
const Proveedor = ProveedorModel(sequelize);
const Available = AvailableModel(sequelize);
const Field = FieldModel(sequelize);

// --------------------------- Relaciones ---------------------------------//
// Recipe.belongsToMany(Diet, { through: "intermediateTable" }); // Relacion de muchos a muchos con la taabla intermedia "intermediateTable"
// Diet.belongsToMany(Recipe, { through: "intermediateTable" }); // Relacion de muchos a muchos con la taabla intermedia "intermediateTable"

module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  User,
  Proveedor,
  Available,
  Field,
};
