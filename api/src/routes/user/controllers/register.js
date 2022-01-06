const User = require("../../models/User")
const bcrypt = require("bcrypt")

export const register = async (req, res) => {

    const { mail, password, /* etc */ } = req.body

    const encryptedPassword = bcrypt.hashSync(password, 10)

    const alreadyExists = await User.findOne({ where: { mail }}).catch(err => console.log(err))

    if(alreadyExists) return res.json({ message: "Ya existe un usuario con ese email" })
    
    let newUser = new User({ 
        mail, 
        password: encryptedPassword 
    })
    newUser = await newUser.save().catch(err => {
        console.log(err)
        res.json({ error: "No se puede registrar al usuario en este momento" })
    })
    if (newUser) res.json({ message: "El usuario se ha registrado correctamente" })
}