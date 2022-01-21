const { Router } = require("express");
const router = Router();

const {
  getAvailability,
} = require("./controllers/availability/getAvailability");

router.get("/available", getAvailability);

// router.get ("/" , (req, res) => {
//     res.send ("Soy la ruta usuario/disponibilidad")
// });

module.exports = router;
