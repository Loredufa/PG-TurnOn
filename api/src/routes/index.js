const {Router} = require ("express")
const router = Router () ;

const userCourt = require ("./user/court")  // trae las diferentes rutass al index 
const userBooking = require ("./user/booking")
const user = require ("./user/user")
const userFavorites = require ("./user/user-favorites")
const userAvailability = require ("./user/availability")
const supplierCourt = require ("./supplier/court")  
const supplierAvailability = require ("./supplier/availability")
const supplierPayments = require ("./supplier/payments")
const supplier = require ("./supplier/supplier")


router.use("/court", userCourt ) 
router.use("/booking", userBooking )
router.use ("/", user)
router.use ("/favorites", userFavorites)
router.use ("/availability", userAvailability)
router.use ("/availability", supplierAvailability)
router.use ("/court", supplierCourt)
router.use ("/payments" , supplierPayments )
router.use ("/", supplier)



module.exports = router
