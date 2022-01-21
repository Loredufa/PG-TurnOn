const { Router } = require("express");
const router = Router();


const supplierCourt = require("./supplier/court");
const supplierAvailability = require("./supplier/availability");
const supplierPayments = require("./supplier/payments");
const supplier = require("./supplier/supplier");
const supplierbookings = require ("./supplier/bookings")
const supplierContact = require ("./supplier/contact")

router.use("/", supplierAvailability);
router.use("/", supplierCourt);
router.use("/", supplierPayments);
router.use("/", supplier);
router.use("/", supplier);
router.use("/", supplierbookings);
router.use ("/", supplierContact)


module.exports = router;