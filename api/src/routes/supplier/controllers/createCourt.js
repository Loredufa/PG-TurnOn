// <<<<<<< HEAD

// =======
// >>>>>>> mirror
const { Field } = require("../../../db");

const createCourt = async (req, res) => {
  const { name, address, phone, description, sport, price, image } = req.body;
  const { supplierId } = req.params;
  // <<<<<<< HEAD
  let newCourt;
  try {
    // =======

    // >>>>>>> mirror
    newCourt = await Field.create({
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
       throw new Error(error);
  }
  

  newCourt = await newCourt.save().catch((err) => {
    console.log(err);
    res.json({ 
      error: "No se puede agregar la cancha correctamente",
      
    });
  });
  if (newCourt) res.json({
     message: "La cancha se ha agregado correctamente",
     data: newCourt });
};

module.exports = { createCourt };
