const express = require("express");
const PORT = process.env.PORT || 3001; //variable de entorno de heroku
const morgan = require("morgan");
const app = express();
const routes = require("./src/routes/index");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");

// aca vamos a setear los headers
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);

// aca vamos a setear el listen
app.use("/supplier", routes);
app.use("/user", routes);

app.use(errorHandler);

const { conn } = require("./src/db");

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("%s listening at ", PORT);
  });
});
