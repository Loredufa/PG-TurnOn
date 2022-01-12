const { Payments } = require("../../../db");

const updatePayment = async (req, res) => {
  const { id } = req.params;
  let newInfo = req.body;

  await Payments.update(newInfo, {
    where: {
      id,
    },
  }).catch((err) =>
    res.send({
      success: false,
      message: "Hubo un error al actualizar el pago",
    })
  );
  res.send({
    success: true,
    message: "El pago ha sido actualizada con éxito",
  });
};

module.exports = { updatePayment };
