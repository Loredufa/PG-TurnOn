const { Supplier } = require("../../../db")
const {Field} = require ("../../../db")

const deleteSupplier = async (req, res) => {
    
    const { id } = req.params;
try {
    const supplierDeleted = await Supplier.destroy ({
        where: {
            id
        },
    //     include:{
    //         model: Field,
    // }
});

    if (supplierDeleted) {
    res.json ({
        message: "El proveedor ha sido borrado correctamente"
    }) }
    else {
    res.json ({
        message: "El proveedor no existe"
        })
    }

}
catch (error) {
        throw new Error ("Error al borrar el usuario")
}
 
}

module.exports = {deleteSupplier}