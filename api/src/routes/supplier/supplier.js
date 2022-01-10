const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")
const { upDateSupplier } = require("./controllers/upDateSupplier")


// router.get ("/supplier" , (req, res, next) => {
//      res.send ("Soy la ruta supplier")
//     try {
//         throw new Error ("Probando errores");
//     } catch (error) {
//         next (error);

//     }
// });

router.post("/supplier", register)
router.get("/supplier", login)
router.put("/supplier/:id", upDateSupplier)



module.exports = router