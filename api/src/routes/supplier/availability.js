const { Router } = require("express");
const router = Router();
const { getAvailability } = require("./controllers/getAvailability");
const { putAvailability } = require("./controllers/putAvailability");
const { postAvailability } = require("./controllers/postAvailability");
const { deleteAvailability } = require("./controllers/deleteAvailability");

router.post("/available/:idCourt", postAvailability);
router.get("/available/:idCourt", getAvailability);
router.put("/available/:idCourt", putAvailability);
router.delete("/available", deleteAvailability);

module.exports = router;
