const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")
const { upDateSupplier } = require("./controllers/upDateSupplier")
const { deleteSupplier } = require("./controllers/deleteSupplier")
const { updatePassword } = require("./controllers/updatePassword")
const {getAllSupplier } = require ("./controllers/getAllSupplier")

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
router.put("/supplier/password/:id", updatePassword)
router.put("/supplier/:id", upDateSupplier)
router.delete("/supplier/:id", deleteSupplier)
router.get("/suppliers", getAllSupplier)



module.exports = router