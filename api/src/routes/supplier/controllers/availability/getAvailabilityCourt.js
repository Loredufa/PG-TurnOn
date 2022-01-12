const { Available } = require("../../../../db");

const getAvailabilityCourt = async (req, res) => {
  const { idCourt } = req.params;

  const availability = await Available.findAll({
    where: { idCourt: idCourt },
  }).catch((err) => console.log(err));

  if (!availability) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    res.json({ availability });
  }
};

module.exports = { getAvailabilityCourt };
