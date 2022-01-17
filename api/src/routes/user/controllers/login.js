const { User } = require("../../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { mail, password } = req.query;
  //   console.log("query:", req.query);
  const user = await User.findOne({ where: { mail: mail } }).catch((err) =>
    console.log(err)
  );
  console.log("mail", mail);
  if (!user) {
    return res.json({ message: "Datos incorrectos" });
  } else {
    if (bcrypt.compareSync(password, user.password)) {
      const jwtToken = jwt.sign(
        { id: user.id, email: user.mail },
        "secreto#$%123" /* <- esto puede ser cualquier cosa, pero idealmente tiene que estar guardado en el .env */
      );
      res.json({ user: user.dataValues, token: jwtToken });
    }
    //  else {
    //     res.json({ message: "Datos incorrectos"})
    // }
  }
};

module.exports = { login };
