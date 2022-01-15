const { Available } = require("../../../../db");
const { Field } = require("../../../../db");

const getAvailabilitySupplier = async (req, res) => {
  const { idSupplier } = req.params;

  const supplierCourts = await Field.findAll({
    where: {
      supplierId: idSupplier,
    },
  });

  // FORMATO
  // {
  //   supplierCourts: [
  //     {
  //       field{
  //         dataValues:{
  //           id:asdads,
  //         }
  //       },
  //       field{
  //         dataValues:{
  //           id:asdads,
  //         }
  //       }
  //     }
  //   ]
  // }

  var idCourt = [];
  supplierCourts.map((elem, index) => {
    idCourt[index] = elem.dataValues.id;
  });
  // console.log("idCourt", idCourt);

  var result = [];
  for (let i = 0; i <= idCourt.length; i++) {
    result[i] = await Available.findAll({
      where: { idCourt: `${idCourt[i]}` },
    }).catch((err) => console.log(err));
  }

  if (!result[0]) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    res.json({ result });
  }
};

module.exports = { getAvailabilitySupplier };
