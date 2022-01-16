const {Router} = require ("express")
const router = Router () 

const { getAvailability } = require("./availability/getAvailability");

router.get("/available/:idCourt", getAvailability);

// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta usuario/disponibilidad")
// });





module.exports = router