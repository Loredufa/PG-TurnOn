const { Router } = require("express");
const router = Router();
const { register } = require("./controllers/register");
const { login } = require("./controllers/login");
const { updateUser } = require("./controllers/updateUser");
const { deleteUser } = require("./controllers/deleteUser");
const { updatePassword } = require("./controllers/updatePassword");
const { getGoogle } = require("./controllers/getGoogle");

router.post("/user", register);
router.get("/user", login);
router.put("/user/password/:id", updatePassword);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.get("/user/google", getGoogle);

module.exports = router;
