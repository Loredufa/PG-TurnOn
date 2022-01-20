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
    return response
}