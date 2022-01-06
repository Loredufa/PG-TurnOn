const {Router} = require ("express")
const router = Router () 


router.get ("/" , (req, res, next) => {
    // res.send ("Soy la ruta usuario")
    try {
        throw new Error ("Probando errores");
    } catch (error) {
        next (error);

    }
});





module.exports = router
