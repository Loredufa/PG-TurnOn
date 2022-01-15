const {User, Supplier, Favorites} = require("../../../db")



const postFavSuppliers = async (req, res) => {

    // const { userId, supplierId} = req.body
 
    // let newFavorite = await Favorites.create ({
    //    userId,
    //    supplierId
    // })

     
    // newFavorite = await newFavorite.save().catch(err => {
    //     console.log(err)
    //     res.json({ error: "No se puede agregar esta cancha como favorita" })
    // })
    // if (newFavorite) res.json({ message: "La cancha se ha agregado como favorita" })
}

module.exports= {postFavSuppliers}