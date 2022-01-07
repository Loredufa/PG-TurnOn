const { Proveedor } = require("../../../db")
const bcrypt = require("bcrypt")

const register = async (req, res) => {
    
    const { name, lastname, mail, password, access, cuit, businessname } = req.body
    
    const encryptedPassword = bcrypt.hashSync(password, 10)

    const alreadyExists = await Proveedor.findOne({ where: { mail: mail }}).catch(err => console.log(err))

    if(alreadyExists) return res.json({ message: "Ya existe un usuario con ese email" })
    
    let newSupplier = new Proveedor({ 
        mail, 
        password: encryptedPassword,
        name,
        lastname,
        access,
        cuit,
        businessname
    })
    newSupplier = await newSupplier.save().catch(err => {
        console.log(err)
        res.json({ error: "No se puede registrar al usuario en este momento" })
    })
    if (newSupplier) res.json({ message: "El usuario se ha registrado correctamente" })
}

module.exports = {
    register
}