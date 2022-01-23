const { Available } = require("../../../../db");

const deleteAvailability = async (req, res) => {
  const { idCourt } = req.params;
  const { date, initialTime, endingTime } = req.body;

  try {
    const availabilityDeleted = await Available.destroy({
      where: {
        idCourt,
        date,
        initialTime,
        endingTime
      },
    });

    if (availabilityDeleted) {
      res.json({
        message: "La franja horaria ha sido borrado correctamente",
      });
    } else {
      res.json({
        message: "La disponibilidad no existe",
      });
    }
  } catch (error) {
    throw new Error("Error al borrar el pago");
  }
};

module.exports = { deleteAvailability };