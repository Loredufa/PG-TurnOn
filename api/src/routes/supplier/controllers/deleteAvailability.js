const { Available } = require("../../../db");

const deleteAvailability = async (req, res) => {
  //   const { idCourt } = req.params;
  const { id } = req.body; // id de la disponibilidad que se quiere borrar

  try {
    const availabilityDeleted = await Available.destroy({
      where: {
        id,
      },
    });

    if (availabilityDeleted) {
      res.json({
        message: "La disponibilidad ha sido borrado correctamente",
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
