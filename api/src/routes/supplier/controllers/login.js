const { Proveedor } = require("../../../db")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const login = async (req, res) => {
    
    const { mail, password } = req.query
    const supplier = await Proveedor.findOne({ where: { mail: mail } }).catch(err => console.log(err)) 
   
    if (!supplier) {
        return res.json({ message: "Datos incorrectos"})
    } else {
        if (bcrypt.compareSync(password, supplier.password)) {
            const jwtToken = jwt.sign(
                { id: supplier.id, email: supplier.mail, }, 
                "secreto#$%123" /* <- esto puede ser cualquier cosa, pero idealmente tiene que estar guardado en el .env */
            )
            res.json({ supplier: supplier.dataValues, token: jwtToken })
        } else {
            res.json({ message: "Datos incorrectos"})
        }
    }
}

module.exports = { login }