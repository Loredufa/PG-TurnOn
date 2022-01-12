const { Router } = require("express");
const router = Router();
const { postBooking } = require("./controllers/postBooking");

router.post("/booking", postBooking);

module.exports = router;
