
const { Field } = require("../../../db");
const { Supplier } = require("../../../db");

const getCourts = async (req, res) => {

    let { name } = req.query;
    let courts;
    
    try {
      if (name) {
        courts = await Field.findAll({
          include: {
            model: Supplier,
            attributes: ["name"],
          },
        });
  
        courts = await courts
          .map((el) => el.dataValues)
          .filter((e) =>
            e.supplier.name.toLowerCase()===name.toLowerCase())
          ;
  
      } else {
        courts = await Field.findAll({});
      }
    } catch (error) {
      throw new Error("Error al encontrar a la cancha solicitada");
    }
    // console.log("courtsByName", courts);
  
    res.send(courts);
  };


module.exports = { getCourts };

// OPCION 2 --> POR PARAMS 

//   let { supplierId } = req.params;
//   let courts;
  
//   try {
//     if (supplierId) {
//       courts = await Field.findAll({supplierId
//         });
//     } else {
//       courts = await Field.findAll({});
//     }
//   } catch (error) {
//     throw new Error("Error al encontrar a la cancha solicitada");
//   }
//   console.log("courtsByName", courts);

//   res.send(courts);
// };
