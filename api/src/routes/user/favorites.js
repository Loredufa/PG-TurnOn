const {Router} = require ("express")
const router = Router () 
const {postFavSupplier} = require ("./controllers/postFavSupplier")
const {getFavCourts} = require ("./controllers/getFavoritesCourts") 


// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta usuario/favorito")
// });

// router.post ("/favorites", postFavSupplier)
// router.get ("/favorites/:userId", getFavCourts)
// router.delete ("/favorites/:userId", deleteFavCourts)

module.exports = router