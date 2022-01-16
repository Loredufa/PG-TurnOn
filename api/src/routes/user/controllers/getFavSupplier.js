const {User} = require("../../../db")



const getFavSupplier = async (req, res) => {

    const {userId} = req.body
   // const {name} = req.query
      
    try {
      
         const user = await User.findByPk(userId)
         const supplier_fav = await user.getSuppliers()
         res.json (supplier_fav)

        
     } catch (error) {
         console.log(error)
         throw new Error("Error al encontrar los favoritos");
       }
     
}

module.exports = {getFavSupplier}


