const { Available } = require("../../../../db");
const noRepeatedDays = require("./helpers/noRepeatedDays");

const getAvailabilityCourt = async (req, res) => {
  const { idCourt } = req.params;
  console.log("idCourt", idCourt);
  let availability = await Available.findAll({
    where: { idCourt: idCourt },
  }).catch((err) => console.log(err));
  // El findAll() retorna un array vacío si no encuentra nada.
  // Para el front me sirve que responda con [] en ese caso.

  if (availability.length) {
    availability = noRepeatedDays(availability);
  }
  res.json(availability);

  /* if (!availability) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    res.json({ availability });
  } */
};

module.exports = { getAvailabilityCourt };
