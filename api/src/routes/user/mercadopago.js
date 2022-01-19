const {Router} = require ("express")
const router = Router () 
const {checkoutMP} = require ("./controllers/checkoutMP")



router.get ("/mercadopago", checkoutMP)


module.exports = router