const { Router } = require("express");
const router = Router();
const { postBooking } = require("./controllers/booking/postBooking");
const { getBooking } = require("./controllers/booking/getBooking");

router.post("/bookings", postBooking);
router.get("/bookings/:userId", getBooking);

module.exports = router;
