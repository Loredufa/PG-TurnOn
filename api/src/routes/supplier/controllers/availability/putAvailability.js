const { Available } = require("../../../../db");

const putAvailability = async (req, res) => {
  const { idCourt } = req.params;
  // const { date, initialTime, endingTime } = req.body; // MIGRAR A ARREGLO DE OBJETO
  let newInfo = req.body;

  await Available.update(newInfo, {
    where: {
      idCourt,
    },
  }).catch((err) =>
    res.send({
      success: false,
      message: "Hubo un error al actualizar la disponibilidad",
    })
  );
  res.send({
    success: true,
    message: "La disponibilidad ha sido actualizada con éxito",
  });
};

module.exports = { putAvailability };
