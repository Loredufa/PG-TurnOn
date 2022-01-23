const { Bookings } = require("../../../db");

const updateBookingStatus = async (req, res) => {
    
    const { id } = req.params
    let { status, rating } = req.query

    // status = el status al que el supplier pide que cambie
    // rating = nos dice si le debemos pedir al usuario que califique
    rating === "true" ? rating = true : rating = false

    let booking = await Bookings.findOne({ where: { id } })
    if (booking) {
        await Bookings.update(
            { 
                status,
                rated: rating ? false : true
            }, 
            {
                where: {
                    id
                }
            }
        )
    }
    res.send({ message: "La reserva ha sido actualizada correctamente"})

}

module.exports = {
    updateBookingStatus
}