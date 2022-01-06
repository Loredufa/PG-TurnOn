const { debugPort } = require("process");

require("dotenv").config();

module.export = {
  dbUser: process.env.DB_USER || "postgres",
  dbName: process.env.DB_NAME || "turnon",
  debPort: process.env.DB_PORT || "5432",
  dbHost: process.env.DB_HOST || "localhost",
  dbPassword: process.env.DB_PASSWORD || "admin",
};
