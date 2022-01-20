const { Bookings } = require("../../../db");

const getBookingsCourt = async (req, res) => {
    
    const { id, date } = req.query
    console.log(id, date)
    let bookings = await Bookings.findAll({
        where: {
            courtId: id,
            date
        }
    })
    res.send(bookings)
}

module.exports = {
    getBookingsCourt
}