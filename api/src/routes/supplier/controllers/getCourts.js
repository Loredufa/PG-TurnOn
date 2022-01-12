const {Field} = require("../../../db")


const getCourts = async (req, res) => {

    let { supplierId } = req.params
        
    let courts

    try {

        if (supplierId) {
            courts = await Field.findAll({ where: { supplierId } })
        }

        else {
            courts = await Field.findAll({})
        }
    }
    catch (error) {
        throw new Error("Error al encontrar a la cancha solicitada")
    }

    res.send(courts)

}

module.exports = {getCourts}






