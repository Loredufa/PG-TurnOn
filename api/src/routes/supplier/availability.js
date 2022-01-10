const {Router} = require ("express")
const router = Router () 
const {createAvailable} = require("./controllers/createAvailable")


// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta proveedor-disponibilidad")
// });

// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta proveedor-disponibilidad")
// });

router.post("/available", createAvailable)



module.exports = router