export const parseDate = (date) => {
    let splited = date.split("/")
    let day = splited[0]
    let month = splited[1]
    if (day.length === 1) {
        day = `0${day}`
    }
    if (month.length === 1) {
        month = `0${month}`
    }
    return `${day}/${month}/${splited[2]}`
}

/* export const arrayAvailables = (availability, bookings) => {
    let newArray = []
    availability.forEach(obj => {
        let current = obj
        current.hours.forEach(str => {
            let splited = str.split(" - ")
            bookings.forEach(b => {
                if(b.initialTime === splited[0]) {
                    current.booked = true
                }
            })
        })
        newArray.push(current)
    })
    console.log(newArray)
    return newArray
} */