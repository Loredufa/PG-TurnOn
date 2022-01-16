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


// let { userId } = req.params
           
    // let courtsfavs

    // try {

    //     if (userId) {
    //         courtsfavs = await Favorites.findAll({ where: { userId } })
    //     }

    //     else {
    //         courtsfavs = await Field.findAll({})
    //     }
    // }
    // catch (error) {
    //     throw new Error("Error al encontrar a las canchas favoritas solicitada")
    // }

    // res.send(courtsfavs)

