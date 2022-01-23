require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_NAME, DB_HOST, DB_USER, DB_PASSWORD } = process.env;
// console.log("Credenciales:", DB_NAME, DB_HOST, DB_USER, DB_PASSWORD);

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
  Bookings,
  Rating,
  Contact,

} = sequelize.models;

// N a N
Field.belongsToMany(User, { through: "Booking_Field" });
User.belongsToMany(Field, { through: "Booking_Field" }); // se genera tabla intermedia

Field.belongsToMany(Available, { through: "Available_Field" }); // se genera tabla intermedia
Available.belongsToMany(Field, { through: "Available_Field" });

User.belongsToMany(Supplier, { through: "Favorites" });
Supplier.belongsToMany(User, { through: "Favorites" });

// 1 a 1

Field.hasOne(Statistics);
Statistics.belongsTo(Field); //statistics tendra una columna idField

Available.hasOne(Bookings);
Bookings.belongsTo(Available); // bookings tendra una columna idAvailable
 

Supplier.hasOne(Rating)
Rating.belongsTo(Supplier)

//1 a N

Supplier.hasMany(Field, {
  onDelete: "CASCADE",
  hooks: true,
  foreignKey: "supplierId",
});

Field.belongsTo(Supplier); // coloca supplierId en field


Supplier.hasMany(Bookings)
Bookings.belongsTo (Supplier) // coloca supplierId en bookings


Payments.hasMany(Bookings);
Bookings.belongsTo(Payments) //coloca el paymentId en bookings

User.hasMany(Bookings);
Bookings.belongsTo(User); // Deberia colocar el userId en Bookings

Comments.belongsTo(Field); // coloca fieldId en comments
// Field.hasMany(Comments);

module.exports = {
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  User,
  Supplier,
  Available,
  Comments,
  Statistics,
  Payments,
  Field,
  Bookings,
  Rating,
  Contact,

};
