const { User } = require("../../../db");

const getAllUsers = async (req, res) => {
   
    let allUsers
    
    try {

      allUsers = await User.findAll({})

    } 
   
    catch (error) {

        console.log(error);
        throw new Error("Error al encontrar todos los usuarios ")}

    res.send(allUsers)

}

    module.exports = { getAllUsers }