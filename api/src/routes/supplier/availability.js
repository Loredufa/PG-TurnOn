const { Router } = require("express");
const router = Router();
const {
  getAvailabilityCourt,
} = require("./controllers/availability/getAvailabilityCourt.js");
const {
  putAvailability,
} = require("./controllers/availability/putAvailability");
const {
  postAvailability,
} = require("./controllers/availability/postAvailability");
const {
  deleteAvailability,
} = require("./controllers/availability/deleteAvailability");
const {
  getAvailabilitySupplier,
} = require("./controllers/availability/getAvailabilitySupplier");

router.post("/available/:idCourt", postAvailability);
router.get("/available/court/:idCourt", getAvailabilityCourt);
router.get("/available/supplier/:idSupplier", getAvailabilitySupplier);
router.put("/available/:idCourt", putAvailability);
router.delete("/available/:idCourt", deleteAvailability);

module.exports = router;
