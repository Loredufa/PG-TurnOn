require("dotenv").config();
// const { DB_PORT, DB_USER, DB_NAME, DB_HOST, DB_PASSWORD } = require("process");
// const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env;

var resp = {
  dbUser: process.env.DB_USER || "postgres", //DB_USER || "postgres", // process.env.DB_USER || "postgres",
  dbName: process.env.DB_NAME || "turnon", //DB_NAME || "turnon", // process.env.DB_NAME || "turnon",
  dbPort: process.env.DB_PORT || "5432", //DB_PORT || "5432", // process.env.DB_PORT || "5432",
  dbHost: process.env.DB_HOST || "localhost", //DB_HOST || "localhost", // process.env.DB_HOST || "localhost",
  dbPassword: process.env.DB_PASSWORD || "admin", //DB_PASSWORD || "admin", //process.env.DB_PASSWORD || "admin",
};
// console.log(resp);
module.exports = resp;


