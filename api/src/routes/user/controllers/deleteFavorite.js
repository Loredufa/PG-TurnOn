const { Favorites } = require("../../../db")

 const deleteFavorites = async (req, res) => {
    
//     const { id } = req.params;
    
// try {
//     const favdeleted = await Favorites.destroy ({
//         where: {
//             id
//         }
//     });

//     if (favdeleted) {
//     res.json ({
//         message: "El usuario ha sido borrado correctamente"
//     }) }
//     else {
//     res.json ({
//         message: "El usuario no existe"
//         })
//     }

// }
// catch (error) {
//         throw new Error ("Error al borrar el usuario")
// }
 
}

module.exports = {deleteFavorites}