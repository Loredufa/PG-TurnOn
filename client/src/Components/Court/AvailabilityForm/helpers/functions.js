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

export const splitHours = (array) => {
    let newArray = []
    array.forEach(obj => {
        let aux = []
        let difference = Number(obj.end.slice(0, 2)) - Number(obj.start.slice(0, 2))
        if(difference === 1) {
            newArray.push(obj)
        }
        else if(difference > 1) {
            let start = Number(obj.start.slice(0, 2))
            for (let i = 0; i < difference; i++) {
                let obj = {
                    start: `${start}:00`,
                    end: `${start + 1}:00`
                }
                aux.push(obj)
                start = start + 1
            }
        }
        newArray = [...newArray, ...aux]
    })
    return newArray
}