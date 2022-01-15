const { Bookings, Field } = require("../../../../db");

const getBooking = async (req, res) => {
  const { userId } = req.params;

  const booking = await Bookings.findAll({
    where: { userId: `${userId}`, status: "active" },
  }).catch((err) => console.log(err));
  if (!booking.length) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    var result = [];
    for (let i = 0; i < booking.length; i++) {
      result[i] = {
        booking: booking[i],
        court: await Field.findOne({
          where: {
            id: booking[i].courtId,
          },
        }),
      };
    }
    res.json({ result });
  }
};

module.exports = { getBooking };
