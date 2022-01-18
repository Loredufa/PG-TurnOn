const {Router} = require ("express")
const router = Router () 
const {putFavSupplier} = require ("./controllers/putFavSupplier")
const {getFavSupplier} = require ("./controllers/getFavSupplier") 
const {deleteFavSupplier} = require ("./controllers/deleteFavSupplier") 


// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta usuario/favorito")
// });

router.put ("/favorites", putFavSupplier)
router.get ("/favorites", getFavSupplier)
router.delete ("/favorites", deleteFavSupplier)

module.exports = router