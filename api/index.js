const express = require("express");
const PORT = 3001;
const morgan = require("morgan");
const app = express();
const routes = require("./src/routes/index");

// aca vamos a setear los headers
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

app.use(morgan("dev"));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// aca vamos a setear el listen
app.use("/supplier", routes);
app.use("/user", routes);

// app.listen(PORT, () => {
//   console.log(`El servidor esta escuchando el puerto ${PORT}`);
// });

// const server = require("./src/app.js");
const { conn } = require("./src/db");
// const { setDefaultDiets } = require("./src/funciones/funciones");

conn.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`El servidor esta escuchando el puerto ${PORT}`);
  });
});