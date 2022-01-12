
const { Field } = require("../../../db")


const courtDetail = async (req, res) => {

    let { idCourt } = req.params

    let court

    try {

        if (idCourt) {

            court = await Field.findByPk(idCourt)
            // court = await Field.findOne({where: {id:idCourt}})
            if (!court) res.json({

                message: "No existe el detalle de la cancha seleccionada"

            })
            else 
                res.send(court)
        }
    }
    catch (error) {
        throw new Error("Error al encontrar el detalle de la cancha seleccionada")
    }
}

module.exports = { courtDetail }
 




