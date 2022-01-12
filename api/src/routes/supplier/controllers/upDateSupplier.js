const { Supplier } = require("../../../db")

const upDateSupplier = async (req, res) => {
    
    const { id } = req.params
    let newInfo = req.body

    await Supplier.update(newInfo, {
        where: {
            id
        }
    })
    let upDateSupplier = await Supplier.findByPk(id)
    res.send({supplier: upDateSupplier.dataValues})
}

module.exports = {
    upDateSupplier
}