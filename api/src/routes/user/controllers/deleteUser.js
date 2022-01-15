const { User } = require("../../../db")

const deleteUser = async (req, res) => {
    
    const { id } = req.params;
    
try {
    const userdeleted = await User.destroy ({
        where: {
            id
        }
    });

    if (userdeleted) {
    res.json ({
        message: "El usuario ha sido borrado correctamente"
    }) }
    else {
    res.json ({
        message: "El usuario no existe"
        })
    }

}
catch (error) {
        throw new Error ("Error al borrar el usuario")
}
 
}

module.exports = {deleteUser}
