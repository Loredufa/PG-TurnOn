const {Router} = require ("express")
const router = Router () 
const {createCourt} = require("./controllers/createCourt")
const {updateCourt} = require("./controllers/updateCourt")


// router.get ("/court" , (req, res, next) => {
//      res.send ("Soy la ruta creacion de cancha")
//     try {
//         throw new Error ("Probando ruta de creacion de cancha");
//     } catch (error) {
//         next (error);

//     }
// });

router.post("/court/:supplierId", createCourt)
router.put("/court/:idCourt", updateCourt)


module.exports = router