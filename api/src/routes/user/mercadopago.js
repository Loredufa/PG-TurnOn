const { Router } = require("express");
const router = Router();
const { checkoutMP } = require("./controllers/mercadopago/checkoutMP");
const { getPaymentsIdMP } = require("./controllers/mercadopago/getoymentsIdMP");
const { getPaymentsMP } = require("./controllers/mercadopago/getPaymentsMP");

router.get("/mercadopago", checkoutMP);
router.get("/mercadopago/pagos/:id", getPaymentsIdMP);
router.get("/mercadopago/pagos", getPaymentsMP);

module.exports = router;
