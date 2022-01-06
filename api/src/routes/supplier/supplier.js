const {Router} = require ("express")
const router = Router () 


router.get ("/supplier" , (req, res) => {
    res.send ("Soy la ruta proveedor")
});





module.exports = router