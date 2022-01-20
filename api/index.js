const express = require("express");
const PORT = process.env.PORT || 3001; //variable de entorno de heroku
const morgan = require("morgan");
const app = express();
const routes = require("./src/routes/user_index");
const routes1 = require("./src/routes/supplier_index");
const routesMP = require("./src/routes/user/mercadopago");
const errorHandler = require("./src/utils/middlewares/errorHandler");
const setHeaders = require("./src/utils/middlewares/setHeaders");

// aca vamos a setear los headers
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));
app.use(morgan("dev"));
app.use(setHeaders);

// aca vamos a setear el listen
app.use("/supplier", routes1);
app.use("/user", routes);
app.use("/", routesMP);

app.use(errorHandler);

const { conn } = require("./src/db");

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log("%s listening at ", PORT);
  });
});
