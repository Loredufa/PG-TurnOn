const { Bookings } = require("../../../../db");

const putBookings = async (req, res) => {
  const { id } = req.params; // se deja el id en vez del codigo de reserva para asegurar la no multiplicidad

  let newInfo = req.body;
  await Bookings.update(newInfo, {
    where: {
      id,
    },
  });
  let updatedBooking = await Bookings.findOne({
    where: {
      id: id,
    },
  });
  res.send(updatedBooking);
};

module.exports = {
  putBookings,
};
