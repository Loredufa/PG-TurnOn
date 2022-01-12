const { Field } = require("../../../db")

const deleteCourt = async (req, res) => {
    
    const { idCourt } = req.params;
 
    try {

    const courtDeleted = await Field.destroy ({
        where: {
            id:idCourt
        }
    });

    if (courtDeleted) {
    res.json ({
        message: "La cancha ha sido borrada correctamente"
    }) }
    else {
    res.json ({
        message: "La cancha no existe"
        })
    }

}
catch (error) {
        throw new Error ("Error al borrar la cancha")
}
 
}

module.exports = {deleteCourt}