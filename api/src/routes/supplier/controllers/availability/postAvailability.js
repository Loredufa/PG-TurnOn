const { Available } = require("../../../../db");

const postAvailability = async (req, res) => {
  //////////////////////////////////////////////////////
  // Formato de data entrante por body:
  // {
  //   days:["Lunes","Martes","Miercoles"]
  //   hours:[{start: "09:00", end: "12:00"},{.....}]
  // }
  // En el body van a venir una seria de dias y el horario en que tendran disponible los turnos esos mismos dias
  //////////////////////////////////////////////////////

  const { days, hours } = req.body;
  const { idCourt } = req.params;

  for (let i = 0; i < days.length; i++) {
    for (let j = 0; j < hours.length; j++) {
      var newAvailability = await Available.create({
        date: days[i],
        initialTime: hours[j].start,
        endingTime: hours[j].end,
        idCourt,
      });
    }
  }

  newAvailability = await newAvailability.save().catch((err) => {
    res.json({ error: "No se puede agregar disponibilidad correctamente" });
  });
  if (newAvailability)
    res.json({ message: "La disponibilidad se ha agregado correctamente",
    data : newAvailability
    });
};

module.exports = { postAvailability };
