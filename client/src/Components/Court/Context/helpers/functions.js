export const orderAvailability = (array) => {
    let response = []
    array.forEach(obj => {
        obj.hours = obj.hours.sort((a, b) => {
            if(Number(a.slice(0, 2)) > Number(b.slice(0,2))) return 1
            if(Number(a.slice(0, 2)) < Number(b.slice(0,2))) return -1
            return 0
        })
        response.push(obj)
    })
    let daysObj = {
        Lunes: 1,
        Martes: 2,
        Miércoles: 3,
        Jueves: 4,
        Viernes: 5,
        Sábado: 6,
        Domingo: 7
    }
    response = response.sort((a, b) => {
        if(daysObj[a.day] < daysObj[b.day]) return -1
        else {
            return 1
        }
    })
    return response
}