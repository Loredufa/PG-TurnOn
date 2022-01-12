const { Field } = require("../../../db");
const { Supplier } = require("../../../db");

const getCourts = async (req, res) => {
  let { sport, name } = req.query;
  let courts;
  // falta traer las canchas por las coordenadas que vienen por body.
  try {
    if (sport) {
      courts = await Field.findAll({ where: { sport } });
    } else if (name) {
      courts = await Field.findAll({
        include: {
          model: Supplier,
          attributes: ["name"],
        },
      });

      courts = await courts
        .map((el) => el.dataValues)
        .filter((e) =>
          e.supplier.name.toLowerCase().includes(name.toLowerCase())
        );

      console.log("courtsByName", courts);
    } else {
      courts = await Field.findAll({});
    }
  } catch (error) {
    throw new Error("Error al encontrar a la cancha solicitada");
  }

  res.send(courts);
};

module.exports = { getCourts };
