const { Router } = require("express");
const router = Router();


const supplierCourt = require("./supplier/court");
const supplierAvailability = require("./supplier/availability");
const supplierPayments = require("./supplier/payments");
const supplier = require("./supplier/supplier");


router.use("/", supplierAvailability);
router.use("/", supplierCourt);
router.use("/", supplierPayments);
router.use("/", supplier);

module.exports = router;