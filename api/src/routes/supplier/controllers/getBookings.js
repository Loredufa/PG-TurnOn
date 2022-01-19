const { Bookings, User } = require("../../../db");

const getBookings = async (req, res) => {

    const {date, status, fieldId, bookingcode} = req. query
    
    let allbookings;

  try {

    allbookings= await Bookings.findAll({
        include: {
            model: User,
            attributes: ["name", "lastname", "phone"],
          },
    })
    console.log(allbookings)
    // if (status) {
    //     allbookings = allbookings.filter ((e) => e.status === status)
    // }
    
    



    } catch (error) {
    throw new Error("Error al encontrar el proveedor solicitado");
    }
  
    res.json({ allbookings });
    }
  
 

module.exports = { getBookings };