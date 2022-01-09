const {Field} = require("../../../db")

const getCourts = async (req, res) => {

    let { sport } = req.query 
  
    // falta traer las canchas por las coordenadas que vienen por body.
    let courts
    if (sport) {
        courts = await Field.findAll({ where: { sport }}) 
    } 
    else {
        courts = await Field.findAll({})
    }
    res.json(courts)
}

module.exports = {getCourts}