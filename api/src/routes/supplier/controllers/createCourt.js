

const {Field} = require("../../../db")


const createCourt = async (req, res) => {

    const { name,  address, phone, description, sport, price, image} = req.body
    const { supplierId } = req.params 
    console.log(supplierId)
    
    let newCourt = await Field.create ({
        name,
        address,
        phone,
        description,
        sport,
        price,
        image,
        supplierId,
    })

    // if (newCourt)
    // await newCourt.setSupplier(supplier_name)
    

    newCourt = await newCourt.save().catch(err => {
        console.log(err)
        res.json({ error: "No se puede agregar la cancha correctamente" })
    })
    if (newCourt) res.json({ message: "La cancha se ha agregado correctamente" })
}

module.exports= {createCourt}