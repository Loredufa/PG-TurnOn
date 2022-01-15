const { Bookings } = require("../../../../db");

const postBooking = async (req, res) => {
  const {
    courtId,
    userId,
    bookingCode,
    status,
    date,
    day,
    initialTime,
    endingTime,
  } = req.body;

  //   const alreadyExists = await Bookings.findOne({
  //     where: { bookingCode: bookingCode },
  //   }).catch((err) => console.log(err));

  let newBooking = await Bookings.create({
    courtId,
    userId,
    bookingCode,
    status,
    date,
    day,
    initialTime,
    endingTime,
  });
  // console.log("NUEVA RESERVA: ", newBooking);
  newBooking = await newBooking.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede registrar la reserva en este momento" });
  });
  if (newBooking)
    res.json({ message: "La reserva se ha registrado correctamente" });
};
module.exports = {
  postBooking,
};
