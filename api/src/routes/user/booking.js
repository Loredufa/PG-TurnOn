const { Router } = require("express");
const router = Router();
const { postBooking } = require("./controllers/booking/postBooking");
const { getBooking } = require("./controllers/booking/getBooking");
const { putBookings } = require("./controllers/booking/putBooking");
const { deleteBooking } = require("./controllers/booking/deleteBooking");

router.post("/bookings", postBooking);
router.get("/bookings/:userId", getBooking);
router.put("/bookings/:id", putBookings);
router.delete("/bookings/:id", deleteBooking);

module.exports = router;
