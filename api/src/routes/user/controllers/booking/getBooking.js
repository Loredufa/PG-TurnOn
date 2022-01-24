const { Bookings, Field, Payments } = require("../../../../db");

const getBooking = async (req, res) => {
  const { userId } = req.params;
  const { active } = req.query;
  const { voucher, courtId } = req.query;
  const { completed } = req.query;
  // console.log("active", typeof active);
  var booking;
  if (active === "true") {
    booking = await Bookings.findAll({
      where: { userId: `${userId}`, status: "active" },
      include: {
        model: Payments,
        attributes: ["id"],
      },
    }).catch((err) => console.log(err));
  } else if (voucher === "true") {
    booking = await Bookings.findAll({
      where: { userId: `${userId}`, courtId, status: "voucher" },
      include: {
        model: Payments,
        attributes: ["id"],
      },
    }).catch((err) => console.log(err));
  } else if (completed === "true") {
    booking = await Bookings.findAll({
      where: { userId: `${userId}`, rated: false, status: "completed" },
      include: {
        model: Payments,
        attributes: ["id"],
      },
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
    if (completed) result = result[0]; //envio solo uno para puntuar
    res.json({ result });
  }
};

module.exports = { getBooking };
