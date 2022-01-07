const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")

router.get ("/" , (req, res, next) => {
    // res.send ("Soy la ruta usuario")
    try {
        throw new Error ("Probando errores");
    } catch (error) {
        next (error);

    }
});

router.post("/user", register)





module.exports = router
