const { Available, Bookings } = require("../../../../db");
//const noRepeatedDays = require("./helpers/noRepeatedDays")

const getAvailability = async (req, res) => {
  const { idCourt , date , day } = req.query;  
  let availability = await Available.findAll({
    where: { idCourt: idCourt },
  }).catch((err) => console.log(err));
 // console.log("Horarios: ",availability);
  let booking = await Bookings.findAll({
    where: { courtId: idCourt,
             date: date,
            day: day, 
            status: 'active'},
  }).catch((err) => console.log(err));
  //console.log("Reservas: " , booking);
  availability = availability.filter (el => el.date === day);
  //console.log(booking[1].dataValues.initialTime)
  let availables = []
  let count = 0;
  if (booking.length) {
      for (let j = 0 ; j < availability.length ; j++) {
        for (let i = 0 ; i < booking.length ; i ++) {
          if (availability[j].initialTime !== booking[i].dataValues.initialTime) {
            count=count+1;
          }
        }
        if(count === booking.length) {
          availables.push(availability[j])
        }
        count = 0;
      }
      availability = availables;
}
/*
    availability = availability.filter (el => 
      booking.filter(bk =>el.initialTime !== bk.dataValues.initialTime &&  el.endingTime !== bk.dataValues.endingTime  ))
*/
/* 
  if (booking.length) {
    var option = [];
    availability.map((a) => {
      booking.map((b) => {
        if (a.date !== b.day && a.initialTime !== b.initialTime) {
          option.push(a);
        }
      });
    });
  } 
*/
  // El findAll() retorna un array vacío si no encuentra nada.
  // Para el front me sirve que responda con [] en ese caso.

  // if(availability.length) {
  //   availability = noRepeatedDays(availability)
  // }
  // res.json(availability)

  if (!availability.length) {
    res.json({ message: "No hay disponibilidad" });
  } else {
    res.json({ availability });
  }
};

module.exports = { getAvailability };
