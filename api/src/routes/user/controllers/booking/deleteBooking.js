const { Bookings } = require("../../../../db");

const deleteBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const bookingDeleted = await Bookings.destroy({
      where: {
        id,
      },
    });

    if (bookingDeleted) {
      res.json({
        message: "La reserva ha sido borrado correctamente",
      });
    } else {
      res.json({
        message: "La reserva no existe",
      });
    }
  } catch (error) {
    throw new Error("Error al borrar la reserva");
  }
};

module.exports = { deleteBooking };
