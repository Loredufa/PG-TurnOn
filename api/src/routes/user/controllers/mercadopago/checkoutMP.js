const { Payments } = require("../../../../db");
const { PROD_ACCESS_TOKEN } = process.env;

// SDK de Mercado Pago
const mercadopago = require("mercadopago");

const checkoutMP = async (req, res) => {
  //const id_orden = req.query.id

  // const id_orden = 1;
  // cargamos el carrido de la bd
  // const carrito = [
  //   { title: "Producto 1", quantity: 5, price: 10.52 },
  //   { title: "Producto 2", quantity: 15, price: 100.52 },
  //   { title: "Producto 3", quantity: 6, price: 200 },
  // ];

  const {
    amount,
    idCourt,
    idUser,
    idSupplier,
    reservationCode,
    state,
    courtName, // Nombre de lo que compro que se ve en MP
  } = req.query;
  var price = parseFloat(amount);
  const carrito = [{ title: courtName, quantity: 1, price: price }];

  let newPayments = await Payments.create({
    amount,
    idCourt,
    idUser,
    idSupplier,
    reservationCode,
    state,
  });
  newPayments = await newPayments.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede agregar el pago correctamente" });
  });
  const id_orden = newPayments.id;

  // Agrega credenciales
  mercadopago.configure({
    access_token: PROD_ACCESS_TOKEN, // Unico de la cuenta del vendedor
  });

  // console.info("ml configured");
  const items_ml = carrito.map((i) => ({
    title: i.title,
    unit_price: i.price,
    quantity: i.quantity,
  }));
  // console.info("carrito", items_ml);

  // Crea un objeto de preferencia
  let preference = {
    items: items_ml,
    external_reference: `${id_orden}`, //`${new Date().valueOf()}`,
    back_urls: {
      success: "https://turnon1.herokuapp.com/mercadopago/pagos",
      failure: "https://turnon1.herokuapp.com/mercadopago/pagos",
      pending: "https://turnon1.herokuapp.com/mercadopago/pagos",
    },
    installments: 1,
    auto_return: "approved", ////////////////////////////////////////////////
  };
  // console.info("preference:", preference);

  mercadopago.preferences
    .create(preference)

    .then(function (response) {
      // console.info("respondio");
      // Este valor reemplazará el string"<%= global.id %>" en tu HTML
      global.id = response.body.id; //agarro el id de la rta
      // console.log(response.body);
      res.json({ id: global.id, init_point: response.body.init_point });
    })
    .catch(function (error) {
      console.log(error);
    });
};
module.exports = { checkoutMP };
