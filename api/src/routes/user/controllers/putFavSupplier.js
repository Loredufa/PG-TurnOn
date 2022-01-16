const {User} = require("../../../db")

const putFavSupplier = async (req, res) => {

        const {userId, supplierId} = req.body
      
   try {
     
        const user = await User.findByPk(userId)
        res.json (await user.addSupplier(supplierId))

    } catch (error) {
        console.log(error)
        throw new Error("Error al marcar como favorito al proveedor");
      }
    
}

module.exports= {putFavSupplier}

        // console.log('TEAMS: ', (await suppliers).map(t => t.toJSON()));
    // const user = await User.create ({})
    // const supplier = await Supplier.create ({})
    // user.addSuppliers(supplierId)
    // supplier.addUsers (userId)

    
    // server.put('/transfer', async (req, res) => {
    //     const { idPlayer, codeTeam } = req.body;
    //     const player = await Player.findByPk(idPlayer);
    //     res.json(await player.addTeam(codeTeam));
    //   });
   
    // res.json(suppliers)






// const { userId, supplierId} = req.body
 
    // let newFavorite = await Favorites.create ({
    //    userId,
    //    supplierId
    // })

     
    // newFavorite = await newFavorite.save().catch(err => {
    //     console.log(err)
    //     res.json({ error: "No se puede agregar esta cancha como favorita" })
    // })
    // if (newFavorite) res.json({ message: "La cancha se ha agregado como favorita" })



     // const favorito= await Supplier.findAll(({ 
    //     where: { id },
    //     include:{
    //     model: User,
    //     attributes: ["id"],
    //   },
    // }));
    // console.log(favorito)
    // if (favorito) res.json(favorito)



    // const user = await User.findAll ({
    //     where:{ 
    //         id : userId}
    // })
    // console.log("user", user)
    // const suppliers = await user.getSuppliers(supplierId)
    // console.log("suppliers", suppliers)