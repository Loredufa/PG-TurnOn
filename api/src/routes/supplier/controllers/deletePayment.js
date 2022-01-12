const { Payments } = require("../../../db");

const deletePayments = async (req, res) => {
  const { id } = req.params;
  try {
    const paymentDeleted = await Payments.destroy({
      where: {
        id,
      },
    });

    if (paymentDeleted) {
      res.json({
        message: "El pago ha sido borrado correctamente",
      });
    } else {
      res.json({
        message: "El pago no existe",
      });
    }
  } catch (error) {
    throw new Error("Error al borrar el pago");
  }
};

module.exports = { deletePayments };
