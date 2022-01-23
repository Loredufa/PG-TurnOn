const { Bookings, User, Supplier, Payments } = require("../../../db");



const getBookings = async (req, res) => {

  const { date, status, courtId, bookingCode, lastname, order, supplierId } = req.query

  let allbookings;
  

  try {

    allbookings = await Bookings.findAll({
        where : {supplierId},
        include: [{
        model: User,
        attributes: ["name", "lastname", "phone"],
      },
      {
        model: Payments,
        attributes: ["price", "payment_status", "amount"],
       }],
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

    // throw new Error("Error al encontrar la informacion solicitada");
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