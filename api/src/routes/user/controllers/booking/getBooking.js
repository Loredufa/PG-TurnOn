const { Bookings } = require("../../../../db");

const getBooking = async (req, res) => {
  const { userId } = req.params;

  const booking = await Bookings.findAll({
    where: { userId: `${userId}` },
  }).catch((err) => console.log(err));
  console.log("nooking: ", booking);
  if (!booking.length) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    res.json({ message: "Datos incorrectos" });
  }
};

module.exports = { getBooking };
