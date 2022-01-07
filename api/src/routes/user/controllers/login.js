const User = require("../../models/User")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

export const login = async (req, res) => {
    
    const { mail, password } = req.body

    const user = await User.findOne({ where: { mail } }).catch(err => console.log(err)) 

    if (!user) {
        return res.json({ message: "Datos incorrectos"})
    } else {
        if (bcrypt.compareSync(password, user.password)) {
            const jwtToken = jwt.sign(
                { id: user.id, email: user.mail, }, 
                "secreto#$%123" /* <- esto puede ser cualquier cosa, pero idealmente tiene que estar guardado en el .env */
            )
            res.json({ user: user, token: jwtToken })
        } else {
            res.json({ message: "Datos incorrectos"})
        }
    }
}