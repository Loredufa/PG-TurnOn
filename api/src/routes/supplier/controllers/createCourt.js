// <<<<<<< HEAD

// =======
// >>>>>>> mirror
const { Field } = require("../../../db");

const createCourt = async (req, res) => {
  const { name, address, phone, description, sport, price, image } = req.body;
  const { supplierId } = req.params;
  // <<<<<<< HEAD
  try {
    // =======

    // >>>>>>> mirror
    let newCourt = await Field.create({
      name,
      address,
      phone,
      description,
      sport,
      price,
      image,
      supplierId,
    });
  } catch (error) {
    // <<<<<<< HEAD
    // if (newCourt)
    // await newCourt.setSupplier(supplier_name)
    throw new Error(error);
  }
  // =======
  // >>>>>>> mirror

  newCourt = await newCourt.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede agregar la cancha correctamente" });
  });
  if (newCourt) res.json({ message: "La cancha se ha agregado correctamente" });
};

module.exports = { createCourt };
