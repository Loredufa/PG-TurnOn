const { Supplier } = require("../../../db");
const { Field } = require("../../../db");

const getSupplier = async (req, res) => {
  let { sport, name, latitude, longitude } = req.query;

  // el name es cdo ponen el nombre del lugar en el buscador general.
  let suppliers;

  // falta traer las canchas por las coordenadas que vienen por body.

  try {
    if (sport) {
      suppliers = await Supplier.findAll({
        include: {
          model: Field,
          attributes: ["sport"],
        },
      });
      if (sport === "others") {
        suppliers = suppliers
          .map((el) => el.dataValues)
          .filter((e) => {
            let deporte = e.fields.map((ele) => ele.sport);
            deporte = deporte.filter(
              (el) =>
                el !== "Futbol" &&
                el !== "Golf" &&
                el !== "Tenis" &&
                el !== "Paddle" &&
                el !== "Hockey"
            );
            return deporte.length > 0;
          });
      } else {
        suppliers = suppliers
          .map((el) => el.dataValues)
          .filter((e) => {
            let deporte = e.fields.map((ele) => ele.sport);
            //console.log(deporte);
            return deporte.includes(sport);
          });
      }
      if (name) {
        suppliers = suppliers
          //.map((el) => el.dataValues)
          .filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
      }
    } else if (name) {
      suppliers = await Supplier.findAll({
        include: {
          model: Field,
          attributes: ["sport"],
        },
      });
      suppliers = suppliers
        .map((el) => el.dataValues)
        .filter((e) => e.name.toLowerCase().includes(name.toLowerCase()));
    } else if (latitude && longitude) {
      try {
        suppliers = await Supplier.findAll({
          include: {
            model: Field,
            attributes: ["sport"],
          },
        });
        suppliers = suppliers?.filter(
          (e) =>
            (((e.coordinates.split(" ")[0] - latitude) * 40000) / 360) ** 2 +
              (((e.coordinates.split(" ")[1] - longitude) * 40000) / 360) **
                2 <=
            20 ** 2
        );
        suppliers = suppliers?.sort((a, b) => {
          return b.reputation - a.reputation;
        });
        suppliers?.length > 10
          ? (suppliers = suppliers.slice(0, 10))
          : (suppliers = suppliers);
      } catch (error) {
        throw new Error(error);
      }
    } else {
      suppliers = await Supplier.findAll({
        include: {
          model: Field,
          attributes: ["sport"],
        },
      });
    }
  } catch (error) {
    throw new Error("Error al encontrar el proveedor solicitado");
  }

  res.send(suppliers);
};

module.exports = { getSupplier };
