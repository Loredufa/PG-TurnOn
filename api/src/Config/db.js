require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_HOST, DB_PASSWORD } = require("./config");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/food`,
  {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  }
);
