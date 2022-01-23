const { Router } = require("express");
const router = Router();
const { rateSupplier } = require("./controllers/rateSupplier");

router.put("/rating/:supplierId", rateSupplier);

module.exports = router;