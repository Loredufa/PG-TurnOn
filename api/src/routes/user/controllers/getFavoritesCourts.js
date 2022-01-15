const {Favorites} = require("../../../db")
const {Field} = require("../../../db")


const getFavCourts = async (req, res) => {

    // let { userId } = req.params
           
    // let courtsfavs

    // try {

    //     if (userId) {
    //         courtsfavs = await Favorites.findAll({ where: { userId } })
    //     }

    //     else {
    //         courtsfavs = await Field.findAll({})
    //     }
    // }
    // catch (error) {
    //     throw new Error("Error al encontrar a las canchas favoritas solicitada")
    // }

    // res.send(courtsfavs)

}

module.exports = {getFavCourts}
