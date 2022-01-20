const { PROD_ACCESS_TOKEN } = process.env;
const mercadopago = require("mercadopago");

// router.get("/pagos/:id", (req, res) => {
const getPaymentsIdMP = async (req, res) => {
  const mp = new mercadopago(PROD_ACCESS_TOKEN);
  const id = req.params.id;
  console.info("Buscando el id", id);
  mp.get(`/v1/payments/search`, { status: "pending" }) //{"external_reference":id})
    .then((resultado) => {
      console.info("resultado", resultado);
      res.json({ resultado: resultado });
    })
    .catch((err) => {
      console.error("No se consulto:", err);
      res.json({
        error: err,
      });
    });
};
module.exports = { getPaymentsIdMP };
