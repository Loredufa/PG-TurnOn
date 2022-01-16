const { Field } = require("../../../db");

const getCourtsPriceSportZone = async (req, res) => {
  let { latitude, longitude, sport, higherToLower, lowerToHigher, max, min } =
    req.query;

  if (latitude && longitude) {
    // Se trae canchas por cercania para filtrar
    // Tambien se puede filtrar por sport aca
    res.send(
      "Aun no se implementa el uso de coordenadas en esta ruta, hablar con Leo"
    );
  } else if (sport) {
    // Traigo todas las canchas filtradas por deporte
    try {
      var courts = await Field.findAll({ where: { sport: sport } });
    } catch (error) {
      throw new Error(error);
    }
  } else {
    // Traigo todas las canchas directamente
    try {
      var courts = await Field.findAll({});
    } catch (error) {
      throw new Error(error);
    }
  }

  // Filtro de precio
  // Andando 14/01/22
  if (higherToLower) {
    let result = [];
    if (Array.isArray(courts)) {
      result = courts.sort(function (a, b) {
        return b.price - a.price;
      });
      courts = result;
    }
  } else if (lowerToHigher) {
    let result = [];
    if (Array.isArray(courts)) {
      result = courts.sort(function (a, b) {
        return a.price - b.price;
      });
      courts = result;
    }
  } else if (max && min) {
    let result = [];
    if (Array.isArray(courts)) {
      max = parseInt(max, 10);
      min = parseInt(min, 10);
      for (let i = 0; i < courts.length; i++) {
        if (courts[i].price <= max && courts[i].price >= min) {
          result.push(courts[i]);
        }
      }
      courts = result;
    }
  }

  res.send(courts);
};

module.exports = { getCourtsPriceSportZone };
