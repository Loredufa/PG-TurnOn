const {User} = require("../../../db")

const putFavSupplier = async (req, res) => {

        const {userId, supplierId} = req.body
      
   try {
     
        const user = await User.findByPk(userId)
        res.json (await user.addSupplier(supplierId))

    } catch (error) {
        console.log(error)
        throw new Error("Error al marcar como favorito al proveedor");
      }
    
}

module.exports= {putFavSupplier}

     


    // const user = await User.findAll ({
    //     where:{ 
    //         id : userId}
    // })
    // console.log("user", user)
    // const suppliers = await user.getSuppliers(supplierId)
    // console.log("suppliers", suppliers)