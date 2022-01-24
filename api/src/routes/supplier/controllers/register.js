const { Supplier } = require("../../../db");
const { User } = require("../../../db");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const {
    name,
    lastname,
    mail,
    password,
    access,
    cuit,
    businessname,
    coordinates,
    phone,
    address,
    image,
  } = req.body;

  const encryptedPassword = bcrypt.hashSync(password, 10);

  const alreadyExists = await Supplier.findOne({ where: { mail: mail } }).catch(
    (err) => console.log(err)
  );

  if (alreadyExists)
    return res.json({ message: "Ya existe un usuario con ese email" });

  let newSupplier = new Supplier({
    mail,
    password: encryptedPassword,
    name: name.toLowerCase(),
    lastname,
    access,
    cuit,
    businessname,
    coordinates,
    phone,
    address,
    image: image
      ? image
      : "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png",
  });

  newSupplier = await newSupplier.save().catch((err) => {
    console.log(err);
    res.json({ error: "No se puede registrar al usuario en este momento" });
  });
  if (newSupplier)
    res.json({
      success: "El usuario se ha registrado correctamente",
      data: newSupplier,
    });
};

module.exports = {
  register,
};
