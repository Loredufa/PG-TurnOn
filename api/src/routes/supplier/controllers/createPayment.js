const { Payments } = require("../../../db");

const createPayment = async (req, res) => {
  const { date, amount, idCort, idUser, idSupplier, reservationCode, state } =
    req.body;
  //   console.log(req.body);
  let newPayments = await Payments.create({
    date,
    amount,
    idCort,
    idUser,
    idSupplier,
    reservationCode,
    state,
  });
  newPayments = await newPayments.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede agregar el pago correctamente" });
  });
  if (newPayments)
    res.json({ message: "El pago se ha agregado correctamente" });
};

module.exports = { createPayment };
