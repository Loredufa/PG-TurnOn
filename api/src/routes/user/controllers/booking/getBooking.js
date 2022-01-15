const { Bookings, Field } = require("../../../../db");

const getBooking = async (req, res) => {
  const { userId } = req.params;
  const { active } = req.query;
  // console.log("active", typeof active);
  var booking;
  if (active === "true") {
    booking = await Bookings.findAll({
      where: { userId: `${userId}`, status: "active" },
    }).catch((err) => console.log(err));
  } else {
    booking = await Bookings.findAll({
      where: { userId: `${userId}` },
    }).catch((err) => console.log(err));
  }
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
