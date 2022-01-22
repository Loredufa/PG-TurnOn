const { Supplier } = require("../../../db");

const getAllSupplier = async (req, res) => {
   
    let allSuppliers
    
    try {

      allSuppliers = await Supplier.findAll({})

    } 
   
    catch (error) {

        console.log(error);
        throw new Error("Error al encontrar todos los usuarios ")}

    res.send(allSuppliers)

}

    module.exports = { getAllSupplier }