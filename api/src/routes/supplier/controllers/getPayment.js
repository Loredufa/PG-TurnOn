const { Payments } = require("../../../db");

const getPayments = async (req, res) => {
  const { idSupplier } = req.query;
  console.log("idSupplier: ", idSupplier);

  const payment = await Payments.findAll({
    where: { idSupplier: idSupplier },
  }).catch((err) => console.log(err));

  if (!payment) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    res.json({ payment: payment });
  }
};

module.exports = { getPayments };
