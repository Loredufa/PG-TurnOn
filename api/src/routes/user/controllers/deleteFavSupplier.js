const { User } = require("../../../db")

 const deleteFavSupplier = async (req, res) => {
    
    const {userId, supplierId} = req.body
      
    try {
      
         const user = await User.findByPk(userId)
         const fav_deleted = await user.removeSupplier(supplierId)
         res.json ("EL proveedor no es mas favorito")
 
     } catch (error) {
         console.log(error)
         throw new Error("Error al borrar los favoritos");
       }
}

module.exports = {deleteFavSupplier}