const {User} = require("../../../db")



const getFavSupplier = async (req, res) => {

    const {userId} = req.query

    const {name} = req.query
    
    try {
      
         const user = await User.findByPk(userId)
         let supplier_fav = await user.getSuppliers()
         

         if (name) {
            supplier_fav = supplier_fav
            .filter((e)=> e.name.toLowerCase()
            .includes(name.toLowerCase()))
                    
        }
        
        res.json (supplier_fav) 
        }
         
      catch (error) {

         console.log(error)
        //  throw new Error("Error al encontrar los favoritos");
     
        }
}

module.exports = {getFavSupplier}


