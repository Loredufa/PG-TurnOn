const express = require("express")
const PORT=3001
const morgan=require ("morgan")
const errorHandler = require ("./src/utils/middlewares/errorHandler")
const setHeaders = require ("./src/utils/middlewares/setHeaders")
const app= express()
const routes =require ("./src/routes/index")

// aca vamos a setear los headers 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));
app.use(morgan('dev'));
app.use(setHeaders)

app.use ("/supplier", routes)
app.use ("/user" , routes)

// se realiza middleware de control de errores
app.use (errorHandler)

// aca vamos a setear el listen

app.listen (PORT, () => {
console.log (`El servidor esta escuchando el puerto ${PORT}`)})