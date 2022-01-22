const {Router} = require ("express")
const router = Router () 
const { register } = require("./controllers/register")
const { login } = require("./controllers/login")
const { updateUser } = require("./controllers/updateUser")
const { deleteUser } = require("./controllers/deleteUser")
const { updatePassword } = require("./controllers/updatePassword")
const { getGoogle } = require("./controllers/getGoogle")

const { getAllUsers} = require ("./controllers/getAllUsers")


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
router.get("/user/google" , getGoogle)

router.get("/users", getAllUsers)



module.exports = router
// =======
// const { Router } = require("express");
// const router = Router();
// const { register } = require("./controllers/register");
// const { login } = require("./controllers/login");
// const { updateUser } = require("./controllers/updateUser");
// const { deleteUser } = require("./controllers/deleteUser");
// const { updatePassword } = require("./controllers/updatePassword");
// const { getGoogle } = require("./controllers/getGoogle");

// router.post("/user", register);
// router.get("/user", login);
// router.put("/user/password/:id", updatePassword);
// router.put("/user/:id", updateUser);
// router.delete("/user/:id", deleteUser);
// router.get("/user/google", getGoogle);

// module.exports = router;
// >>>>>>> backEnd1
