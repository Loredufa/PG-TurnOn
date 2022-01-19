const { Router } = require("express");
const router = Router();


const supplierCourt = require("./supplier/court");
const supplierAvailability = require("./supplier/availability");
const supplierPayments = require("./supplier/payments");
const supplier = require("./supplier/supplier");
const supplierbookings = require ("./supplier/bookings")


router.use("/", supplierAvailability);
router.use("/", supplierCourt);
router.use("/", supplierPayments);
router.use("/", supplier);
router.use("/", supplier);
router.use("/", supplierbookings);


module.exports = router;