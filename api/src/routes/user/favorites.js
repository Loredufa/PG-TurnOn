const {Router} = require ("express")
const router = Router () 
const {postFavoritesCourts} = require ("./controllers/postFavoritesCourts")
const {getFavCourts} = require ("./controllers/getFavoritesCourts") 


// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta usuario/favorito")
// });

router.post ("/favorites", postFavoritesCourts)
router.get ("/favorites/:userId", getFavCourts)
// router.delete ("/favorites/:userId", deleteFavCourts)

module.exports = router