const {Router} = require ("express")
const router = Router () 
const {getBookings} = require("./controllers/getBookings") 
const { getBookingsCourt } = require("./controllers/getBookingsCourt")

// router.get ("/bookings" , (req, res, next) => {
//     try {
//   res.send ("Soy la ruta historial de bookings") }
//     catch (error) {
//         next (error);

//     }
// });
router.get("/bookings/court", getBookingsCourt)
 router.get ("/bookings", getBookings )

module.exports = router