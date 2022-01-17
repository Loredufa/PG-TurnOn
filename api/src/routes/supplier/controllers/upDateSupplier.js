const { Supplier } = require("../../../db")

const upDateSupplier = async (req, res) => {
    
    const { id } = req.params
    let newInfo = req.body
    try {
    await Supplier.update(newInfo, {
        where: {
            id
        }
    })
    let upDateSupplier = await Supplier.findByPk(id)
    res.send({supplier: upDateSupplier.dataValues})}
    catch (error) {throw new Error (error)}
}

module.exports = {
    upDateSupplier
}