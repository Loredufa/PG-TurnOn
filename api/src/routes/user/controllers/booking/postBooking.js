const { Bookings } = require("../../../../db");
const { User } = require("../../../../db");

const postBooking = async (req, res) => {
  const {
    courtId,
    bookingCode,
    status,
    date,
    day,
    initialTime,
    endingTime,
    userId,
    supplierId,
    paymentId,
  } = req.body;

  //   const alreadyExists = await Bookings.findOne({
  //     where: { bookingCode: bookingCode },
  //   }).catch((err) => console.log(err));

  let newBooking = await Bookings.create({
    // userId,
    courtId,
    bookingCode,
    status,
    date,
    day,
    initialTime,
    endingTime,
    paymentId
  });
  // console.log("NUEVA RESERVA: ", newBooking);

  // newBooking.setPayments(paymentId)
  newBooking.setUser(userId);
  newBooking.setSupplier(supplierId)


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
