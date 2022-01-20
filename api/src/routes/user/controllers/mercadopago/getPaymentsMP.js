const { Payments } = require("../../../../db");

// router.get("/pagos", (req, res) => {

const getPaymentsMP = async (req, res) => {
  //   console.info("EN LA RUTA PAGOS ", req);
  const payment_id = req.query.payment_id;
  const payment_status = req.query.status;
  const external_reference = req.query.external_reference;
  const merchant_order_id = req.query.merchant_order_id;
  //   console.log("EXTERNAL REFERENCE ", external_reference);

  //Aquí edito el status de mi orden

  Payments.findByPk(external_reference)
    .then((order) => {
      order.payment_id = payment_id;
      order.payment_status = payment_status;
      order.merchant_order_id = merchant_order_id;
      order.status = "created";
      console.info("Salvando order");
      order
        .save()
        .then((_) => {
          console.info("redirect success");

          return res.redirect("https://auth.expo.io/@francopizzi/client_mobile");
        })
        .catch((err) => {
          console.error("error al salvar", err);
          return res.redirect(
            `http://localhost:3000/?error=${err}&where=al+salvar`
          );
        });
    })
    .catch((err) => {
      console.error("error al buscar", err);
      return res.redirect(
        `http://localhost:3000/?error=${err}&where=al+buscar`
      );
    });

  //proceso los datos del pago
  // redirijo de nuevo a react con mensaje de exito, falla o pendiente
  //res.send(`${payment_id} ${payment_status} ${external_reference} ${merchant_order_id} `)
};
module.exports = { getPaymentsMP };
