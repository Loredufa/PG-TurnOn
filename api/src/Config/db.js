require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_HOST, DB_PASSWORD } = require("./config");
const UserModel = require("../models/User");
const ProveedorModel = require("../models/Proveedor");
const AvailableModel = require("../models/Available");
const FieldModel = require("../models/Field");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

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
