const express = require("express")
const PORT=3001
const morgan=require ("morgan")
const app= express()

// aca vamos a setear los headers 
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use(express.json({ limit: '50mb' }));

app.use(morgan('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// aca vamos a setear el listen
app.get ("/" , (req, res) => {
res.send("HOla esta es una prueba")})

app.listen (PORT, () => {
console.log (`El servidor esta escuchando el puerto ${PORT}`)})