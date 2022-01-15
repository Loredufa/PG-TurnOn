const { User } = require("../../../db")
const bcrypt = require("bcrypt")

const updatePassword = async (req, res) => {
    
    const { oldPassword, newPassword } = req.body
    const { id } = req.params

    const user = await User.findOne({ where: { id } })
    if (bcrypt.compareSync(oldPassword, user.password)) {
        let encryptedPassword = bcrypt.hashSync(newPassword, 10)
        await User.update({ password: encryptedPassword }, {
            where: {
                id
            }
        }).catch(err => res.send({
            message: "Hubo un error al actualizar la contraseña"
        }))
        res.send({
            success: "La contraseña se ha actualizado con éxito"
        })        
    }
    else {
        res.send({ error: "Contraseña incorrecta" })
    }
}

module.exports = {
    updatePassword
}