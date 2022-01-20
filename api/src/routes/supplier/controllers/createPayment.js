const { Payments } = require("../../../db");

const createPayment = async (req, res) => {

  const {
    amount,
    idCourt,
    idUser,
    idSupplier,
    reservationCode,
    state,
    status,
    price,
    quantity,
  } = req.body;
  console.log(req.body);
  let newPayments = await Payments.create({
    amount,
    idCourt,
    idUser,
    idSupplier,
    reservationCode,
    state,
    status,
    price,
    quantity,
  });
  newPayments = await newPayments.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede agregar el pago correctamente" });
  });
  if (newPayments)
    res.json({
      message: "El pago se ha agregado correctamente",
      payment: newPayments,
    });
};

module.exports = { createPayment };
