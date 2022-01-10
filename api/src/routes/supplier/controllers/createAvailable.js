const {Available} = require("../../../db")

const createAvailable = async (req, res) => {

    const { days,  hours, shifths } = req.body
    console.log(req.body)
    let newAvailable = await Available.create ({
        days,
        hours,
        shifths,
    })
    newAvailable = await newAvailable.save().catch(err => {
        console.log(err)
        res.json({ error: "No se pudo agregar el dia y horario" })
    })
    if (newAvailable) res.json({ message: "El dia y horario se agrego correctamente" })
}

module.exports= {createAvailable}