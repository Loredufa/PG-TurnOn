const {Field} = require("../../../db")

const getCourts = async (req, res) => {

    const { sport } = req.query 
    // falta traer las canchas por las coordenadas que pusimos que vienen por body.
    let courts
    if (sport) {
        courts = await Field.findAll({ where: { sport }}) // ver el tema de mayusculas y minusculas del deporte.
    } 
    else {
        courts = await Field.findAll({})
    }
    res.json(courts)
}

module.exports = {getCourts}