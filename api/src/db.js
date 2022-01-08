require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require('fs');
const path = require('path');
const { dbUser, dbHost, dbPassword, dbName } = require("./Config/config");


/* const UserModel = require("../models/User");
const ProveedorModel = require("../models/Proveedor");
const AvailableModel = require("../models/Available");
const FieldModel = require("../models/Field"); */

const sequelize = new Sequelize(
  `postgres://${dbUser}:${dbPassword}@${dbHost}/${dbName}`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { User, Supplier, Field, Available, Bookings, Comments, Favorites, Payments, Statistics } = sequelize.models;

// --------------------------- Relaciones ---------------------------------//

// Supplier.hasMany(Field)
// Field.belongsTo(Supplier)

// Field.belongsToMany(User, {through: "Bookings"} )   
// User.belongsToMany(Field, {through: "Bookings"})

// User.hasMany(Favorites)
// Favorites.belongsTo(User)

// Field.belongsToMany(Available, {through:"Field-Available"})
// Available.belongsToMany(Field, {through:"Field-Available"})

// Bookings.hasOne(Payments)
// Payments.belongsTo(Bookings) 

// Bookings.hasOne(Available)
// Available.belongsTo(Bookings) // Ver si es reciproco

// Field.hasMany(Comments)
// Comments.belongsTo(Field)

//Ver las relaciones de estadísticas.
/* const User = UserModel(sequelize);
const Proveedor = ProveedorModel(sequelize);
const Available = AvailableModel(sequelize);
const Field = FieldModel(sequelize);
console.log(UserModel) */
 



module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  User,
  Supplier,
  Available,
  Field,
  Bookings, 
  Comments, 
  Favorites, 
  Payments, 
  Statistics
};
