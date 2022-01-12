const { Router } = require("express");
const router = Router();
const { createPayment } = require("./controllers/createPayment");
const { updatePayment } = require("./controllers/updatePayment");
const { getPayments } = require("./controllers/getPayment");
const { deletePayments } = require("./controllers/deletePayment");

router.post("/payments", createPayment);
router.put("/payments/:id", updatePayment);
router.get("/payments", getPayments);
router.delete("/payments/:id", deletePayments);

module.exports = router;
