const { builtinModules } = require("module")
const {Field} = require("../../../db")


const updateCourt = async (req, res) => {
    
    const { id } = req.params
    let newInfo = req.body

    await Field.update(newInfo, {
        where: {
            id
        }
    }).catch(err => res.send({ 
        success: false, 
        message: "Hubo un error al actualizar la cancha"
    }))
    res.send({ 
        success: true,
        message: "La cancha ha sido actualizada con éxito" 
    })
}

module.exports = {updateCourt}