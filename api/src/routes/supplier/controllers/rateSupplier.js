const { Rating, Supplier, Booking } = require("../../../db")

const rateSupplier = async (req, res) => {
  
    const { supplierId } = req.params
    const { number, bookingId } = req.body
    
    let obj = {
        5: "five",
        4: "four",
        3: "three",
        2: "two",
        1: "one"
    }
    let property = obj[number]
    let rating = await Rating.findOne({ where: { supplierId } })
    
    if(!rating) {
        await Rating.create({ 
            supplierId, 
            [property]: 1 
        })
    }
    else {
        await Rating.update({ [property]: rating[property] + 1 }, {
            where: {
                supplierId
            }
        })
    }
    rating = await Rating.findOne({ where: { supplierId } })
    let reputation = (
        rating.one * 1 + 
        rating.two * 2 + 
        rating.three * 3 + 
        rating.four * 4 +
        rating.five * 5
    ) / (rating.one + rating.two + rating.three + rating.four + rating.five)

    await Supplier.update({ reputation }, {
        where: {
            id: supplierId
        }
    })

    await Booking.update({ rated: true }, {
        where: {
            id: bookingId
        }
    })
    
    res.send({ message: "Proveedor valorado con éxito" })
}   

module.exports = { rateSupplier }