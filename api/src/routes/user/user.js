const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")
const { updateUser } = require("./controllers/updateUser")
const {deleteUser} = require("./controllers/deleteUser")
const { updatePassword } = require("./controllers/updatePassword")
 

// router.get ("/" , (req, res, next) => {
//      res.send ("Soy la ruta usuario")
    // try {
    //     throw new Error ("Probando errores");
    // } catch (error) {
    //     next (error);

    // }
// });

router.post("/user", register)
router.get("/user", login)
router.put("/user/password/:id", updatePassword)
router.put("/user/:id", updateUser)
router.delete("/user/:id", deleteUser)



module.exports = router
