const { Bookings, User } = require("../../../db");


function convertirFecha(date) {
  // la fecha viene en formato "xx/yy/aa", la convierto a "xx/yy/aaaa" 
  //para poder ordenarlo luego

  let fecha = date.split("/");
  let año = new Date().getFullYear();

  if (fecha.length == 3) {
    fecha[2] = año;
  }
  var mes = fecha[1] - 1;
  var dia = fecha[0];

  let fechas = new Date(año, mes, dia);
  return fechas.toLocaleDateString()
}


const getBookings = async (req, res) => {

  const { date, status, courtId, bookingCode, lastname, order } = req.query

  let allbookings;

  try {

    allbookings = await Bookings.findAll({
      include: {
        model: User,
        attributes: ["name", "lastname", "phone"],
      },
    })


    //Filtros son acumulativos 
    if (status) {
      allbookings = allbookings
        .filter((e) => e.status === status)
    }

    if (bookingCode) {
      allbookings = allbookings
        .filter((e) => e.bookingCode === bookingCode)
    }

    if (lastname) {
      allbookings = allbookings
        .filter((e) => e.user.lastname.toLowerCase()
          .includes(lastname.toLowerCase()))
    }

    if (date) {
      allbookings = allbookings
        .filter((e) => e.date === date)
    }

    if (courtId) {
      allbookings = allbookings
        .filter((e) => e.courtId === courtId)

    }


    // Ordenamiento por fechas

    for (element of allbookings) {
      element.date = convertirFecha(element.date)
    }
    if (order=== "asc") {

      allbookings = allbookings.sort((a, b) => {

        if (a.date > b.date) {
          return 1
        }
        if (a.date < b.date) {
          return -1
        }
        return 0
      })

    } else if (order === "desc") {
      allbookings = allbookings.sort((a, b) => {

        if (a.date < b.date) {
          return 1
        }
        if (a.date > b.date) {
          return -1
        }
        return 0
      })

    }
  } catch (error) {

    throw new Error("Error al encontrar la informacion solicitada");
  }

  res.json({ allbookings });
}

module.exports = { getBookings };




      // allbookings= await Bookings.findAll({
      //   include: {
      //       model: User,
      //       attributes: ["name", "lastname", "phone"],
      //     },
      //   order: [
      //     ['date', 'ASC']
      //   ]
      // })