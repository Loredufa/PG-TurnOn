const {Router} = require ("express")
const router = Router () 
const {getCourts} = require("./controllers/getCourts")
// const {getCourtByName} = require("./controllers/getCourtByName")

// router.get ("/court" , (req, res, next) => {
//      res.send ("Soy la ruta de traerme todas las canchas por deporte")
//     try {
//         throw new Error ("Probando ruta de creacion de cancha");
//     } catch (error) {
//         next (error);

//     }
// });

router.get("/court", getCourts)
// router.get("/court", getCourtByName)


module.exports = router