const {Router} = require ("express")
const router = Router () 
const {getSupplier} = require ("./controllers/getSupplier")

// router.get ("/supplier" , (req, res, next) => {
//     try {
//      res.send ("Soy la ruta usuario/supplier")}
    
//      catch (error) {
//         throw new Error ("Error en la ruta")
//     }
// });

router.get("/supplier", getSupplier)

module.exports = router