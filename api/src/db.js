require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
// const {
//   dbUser,
//   dbHost,
//   dbPassword,
//   dbName,
//   dbPort,
// } = require("./Config/config");
//const Favorites = require("./models/Favorites");
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
/* const UserModel = require("../models/User");
const ProveedorModel = require("../models/Proveedor");
const AvailableModel = require("../models/Available");
const FieldModel = require("../models/Field"); */
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  User,
  Comments,
  Statistics,
  Payments,
  Supplier,
  Field,
  Available,
  Favorites,
  Bookings,
} = sequelize.models;

/* const User = UserModel(sequelize);
const Proveedor = ProveedorModel(sequelize);
const Available = AvailableModel(sequelize);
const Field = FieldModel(sequelize);
console.log(UserModel) */
// --------------------------- Relaciones ---------------------------------//
// Recipe.belongsToMany(Diet, { through: "intermediateTable" }); // Relacion de muchos a muchos con la taabla intermedia "intermediateTable"
// Diet.belongsToMany(Recipe, { through: "intermediateTable" }); // Relacion de muchos a muchos con la taabla intermedia "intermediateTable"

// N a N
Field.belongsToMany(User, { through: "Booking_Field" });
User.belongsToMany(Field, { through: "Booking_Field" }); // se genera tabla intermedia

Field.belongsToMany(Available, { through: "Available_Field" }); // se genera tabla intermedia
Available.belongsToMany(Field, { through: "Available_Field" });

// 1 a 1

Field.hasOne(Statistics);
Statistics.belongsTo(Field); //statistics tendra una columna idField

Available.hasOne(Bookings);
Bookings.belongsTo(Available); // bookings tendra una columna idAvailable

Bookings.hasOne(Payments);
Payments.belongsTo(Available); // Payments tendra una columna idBooking

//1 a N
Supplier.hasMany(Field);
Field.belongsTo(Supplier); // coloca proveedorId en field

// User.hasMany(Favorites, {foreignKey: 'id'})   ver si Favorites es la tabla intermedia entre usuario y cancha
// Favorites.belongsTo(User) // coloca userId en favorites

Comments.belongsTo(Field); // coloca fieldId en comments

//Field.hasMany(Comments, {foreignKey})

module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  User,
  Supplier,
  Available,
  Comments,
  Statistics,
  Payments,
  Field,
  Favorites,
  Bookings,
};
