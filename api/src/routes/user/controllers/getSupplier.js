const { Supplier } = require("../../../db");
const {Field} = require("../../../db");

const getSupplier = async (req, res) => {

  let { sport, name } = req.query;
    
  // el name es cdo ponen el nombre del lugar en el buscador general.
  let suppliers;

  // falta traer las canchas por las coordenadas que vienen por body.

  try {
    if (sport) {    

        suppliers = await Supplier.findAll({ 
        include: {
          model: Field,
          attributes: ["sport"],
        }})
        suppliers = suppliers.map((el) => el.dataValues)
        .filter((e)=> {
          let deporte = e.fields.map((ele) => ele.sport)
          return deporte.includes (sport)
      })
    }
      
    else if (name) {
      
        suppliers = await Supplier.findAll({})
        suppliers = suppliers.map((el) => el.dataValues)
        .filter((e) => e.name.toLowerCase().includes(name.toLowerCase()))
    }
  }
    catch (error) {
    throw new Error("Error al encontrar el proveedor solicitado");
  }

  res.send(suppliers);
};

module.exports = { getSupplier };



