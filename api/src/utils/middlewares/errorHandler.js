// se realiza middleware de control de errores

function errorHandler(err, req, res, next) {
    const status = err.status || 500
    const message = err.message || err 
    console.error(err)
    return res.status(status).send(message)
} 

module.exports = errorHandler