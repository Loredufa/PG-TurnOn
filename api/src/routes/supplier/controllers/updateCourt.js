
const {Field} = require("../../../db")


const updateCourt = async (req, res) => {
    
    const { idCourt } = req.params
    let newInfo = req.body

    await Field.update(newInfo, {
        where: {
            id:idCourt
        }
    }).catch(err =>        
        res.send({ 
        success: false, 
        message: "Hubo un error al actualizar la cancha"
    }))
    res.send({ 
        success: true,
        message: "La cancha ha sido actualizada con éxito" 
    })
}

module.exports = {updateCourt}