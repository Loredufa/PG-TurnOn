const { User } = require("../../../db");
const { Supplier } = require("../../../db");
const { Field } = require("../../../db");

const getFavSupplier = async (req, res) => {
  const { userId } = req.query;
  const { name } = req.query;

  try {
    const user = await User.findByPk(userId);
    // console.log("User: ", user);
    var supplier_fav = await user.getSuppliers();

    let supplierConCancha = await Supplier.findAll({
      // Traigo los suppliers con los deportes de sus canchas anexos
      include: {
        model: Field,
        attributes: ["sport"],
      },
    });
    var resultFav = supplierConCancha.filter((elem) => {
      for (let i = 0; i < supplier_fav.length; i++) {
        if (elem.dataValues.id === supplier_fav[i].id) return true;
      }
      return false;
    });
    supplier_fav = resultFav;
    // supplier_fav = [];
    // var sucutrule = [];
    // for (let i = 0; i < resultFav.length; i++) {
    //   let arrayAux = [];
    //   resultFav[i].fields?.forEach((element) => {
    //     if (!arrayAux.includes(element.sport)) arrayAux.push(element.sport);
    //   });
    //   resultFav[i].fields = arrayAux; // = { ...resultFav[i], pipa: arrayAux };

    //   sucutrule[i] = resultFav[i]; //{ ...resultFav[i], fields: arrayAux }; //
    //   sucutrule[i].fields = arrayAux;
    // }
    // supplier_fav = sucutrule;

    if (name) {
      supplier_fav = supplier_fav.filter((e) =>
        e.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    res.json(supplier_fav);
  } catch (error) {
    console.log(error);
    //  throw new Error("Error al encontrar los favoritos");
  }
};

module.exports = { getFavSupplier };
