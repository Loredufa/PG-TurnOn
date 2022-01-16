const { Available, Bookings } = require("../../../db");
//const noRepeatedDays = require("./helpers/noRepeatedDays")

const getAvailability = async (req, res) => {
  const { idCourt } = req.params;

  let availability = await Available.findAll({
    where: { idCourt: idCourt },
  
  }).catch((err) => console.log(err));
  console.log(availability)
  let booking = await Bookings.findAll({
    where: { courtId: idCourt }
  }).catch((err) => console.log(err));
  console.log(booking);
  if (booking.length) {
    const option = []
    availability.filter((a) => {
        booking.filter((b) => {
            if (a.date !== b.day && a.initialTime !== b.initialTime) {
                option.push(a)
            }
        })
    })
    console.log(option);
  }
  // El findAll() retorna un array vacío si no encuentra nada.
  // Para el front me sirve que responda con [] en ese caso.

  // if(availability.length) {
  //   availability = noRepeatedDays(availability)
  // }
  // res.json(availability)

  if (!availability.length) {
    return res.json({ message: "No hay disponibilidad" });
  } else {
    res.json({ option });
  } 
};

module.exports = { getAvailability };