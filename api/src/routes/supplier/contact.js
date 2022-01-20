const {Router} = require ("express")
const router = Router () 
const { createContact } = require("./controllers/createContact")



router.post("/contact", createContact)
//router.put("/court/:id", updateCourt)
//
module.exports = router