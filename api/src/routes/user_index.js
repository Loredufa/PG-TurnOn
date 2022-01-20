const { Router } = require("express");
const router = Router();

const user = require("./user/user");
const userCourt = require("./user/court"); 
const userBooking = require("./user/booking");
const userFavorites = require("./user/favorites");
const userAvailability = require("./user/availability");
const userSupplier = require ("./user/supplier")

const supplierContact = require ("./supplier/contact")
const mercadopago = require("./user/mercadopago")


router.use("/", user);
router.use("/", userCourt);
router.use("/", userBooking);
router.use("/", userFavorites);
router.use("/", userAvailability);
router.use("/", userSupplier);

router.use ("/", supplierContact)

router.use("/", mercadopago);



module.exports = router;
