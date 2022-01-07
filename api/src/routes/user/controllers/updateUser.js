const { User } = require("../../../db")

const updateUser = async (req, res) => {
    
    const { id } = req.params
    let newInfo = req.body

    await User.update(newInfo, {
        where: {
            id
        }
    })
    let updatedUser = await User.findByPk(id)
    res.send(updatedUser)
}

module.exports = {
    updateUser
}