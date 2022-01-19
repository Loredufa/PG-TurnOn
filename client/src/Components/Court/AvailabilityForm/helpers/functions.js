export const orderHours = (array) => {
    return array.sort((a, b) => {
        if (Number(a.start.slice(0, 2)) > Number(b.start.slice(0, 2))) return 1
        if (Number(a.start.slice(0, 2)) < Number(b.start.slice(0, 2))) return -1
        return 0 
    })
}

export const verifyHours = (availability, days, hours) => {
    let isIncorrect = false
    let message = ""
    availability.forEach(obj => {
        let current = obj
        days.forEach(day => {
            if (current.day === day) {
                hours.forEach(h => {
                    let hour = h
                    current.hours.forEach(str => {
                        let splited = str.split(" - ")
                        if (
                            (splited[0] === hour.start || splited[1] === hour.end) ||
                            (Number(splited[0].slice(0,2)) <= Number(hour.start.slice(0,2)) && Number(splited[1].slice(0,2)) >= Number(hour.end.slice(0,2))) ||
                            (Number(splited[0].slice(0,2)) <= Number(hour.start.slice(0,2)) && Number(splited[1].slice(0,2)) >= Number(hour.end.slice(0,2)))
                        ) {
                            isIncorrect = true
                            message = "Ya has configurado una franja horaria similar"
                            return {
                                isIncorrect,
                                message
                            }
                        }

                    })
                })
            }
        })
    })
    return {
        isIncorrect,
        message
    }
}