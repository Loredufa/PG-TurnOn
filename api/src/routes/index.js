const { Router } = require("express");
const router = Router();

const userCourt = require("./user/court"); // trae las diferentes rutass al index
<<<<<<< HEAD
const user = require("./user/user");
const userFavorites = require("./user/user-favorites");
const userAvailability = require("./user/availability");
const userBooking = require("./supplier/booking");
=======
const userBooking = require("./user/booking");
const user = require("./user/user");
const userFavorites = require("./user/user-favorites");
const userAvailability = require("./user/availability");
>>>>>>> 76689875356be07b01271d4ca7f46f566f485c09
const supplierCourt = require("./supplier/court");
const supplierAvailability = require("./supplier/availability");
const supplierPayments = require("./supplier/payments");
const supplier = require("./supplier/supplier");

router.use("/", userCourt);
router.use("/", userBooking);
router.use("/", user);
router.use("/", userFavorites);
router.use("/", userAvailability);
router.use("/", supplierAvailability);
router.use("/", supplierCourt);
router.use("/", supplierPayments);
router.use("/", supplier);

module.exports = router;
