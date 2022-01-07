const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")


router.get ("/" , (req, res, next) => {
    // res.send ("Soy la ruta usuario")
    try {
        throw new Error ("Probando errores");
    } catch (error) {
        next (error);

    }
});

router.post("/supplier", register)
router.get("/supplier", login)



module.exports = router