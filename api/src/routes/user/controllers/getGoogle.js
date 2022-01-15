const { User } = require("../../../db");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const jwtDecode = require("jwt-decode");

const getGoogle = async (req, res) => {
  const { token } = req.query;
  const decoded = jwtDecode(token);
  const { given_name, family_name, email } = decoded;
  //res.json ({given_name ,family_name, email});
  const mail = email;
  const name = given_name;
  const lastname = family_name;
  const password = bcrypt.hashSync("google", 10);
  const phone = "0000000000";

  if (mail) {
    try {
      const [user, created] = await User.findOrCreate({
        where: { mail: mail },
        defaults: {
          name,
          lastname,
          password,
          phone,
        },
      });
      const jwtToken = jwt.sign(
        { id: user.id, email: user.mail },
        "secreto#$%123" /* <- esto puede ser cualquier cosa, pero idealmente tiene que estar guardado en el .env */
      );

      // <<<<<<< HEAD
      if (created) {
        res.json({ user: user, token: jwtToken, created });
      } else {
        // const user = { mail, name, lastname, password, phone };
        const user = await User.findOne({ where: { mail: mail } });
        res.json({ user: user, token: jwtToken, created });
      }
    } catch (error) {
      throw new Error(error);
      // =======
      //     if (mail) {
      //         try {
      //         const [user, created] = await User.findOrCreate({
      //             where: { mail: mail },
      //             defaults: {
      //                 name,
      //                 lastname,
      //                 password,
      //                 phone
      //             }
      //         });
      //         const jwtToken = jwt.sign(
      //             { id: user.id, email: user.mail, },
      //             "secreto#$%123" /* <- esto puede ser cualquier cosa, pero idealmente tiene que estar guardado en el .env */
      //             )

      //             if (created) {
      //                 res.json({ user: user , token: jwtToken , created})
      //             }
      //             else {
      //                 const user = await User.findOne({
      //                     where: {mail: mail},
      //                 })
      //                 res.json({ user: user , token: jwtToken , created })
      //             }
      //         }
      //         catch (error) {
      //         throw new Error(error);
      //         }
      //     } else {
      //         return res.json({ message: "Datos incorrectos"})
      // >>>>>>> frontMobile2
    }
  } else {
    return res.json({ message: "Datos incorrectos" });
  }
};

module.exports = { getGoogle };
