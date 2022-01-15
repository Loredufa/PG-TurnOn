function noRepeatedDays (array) {
    let response = []
    array.forEach(x => {
        let current = x.dataValues
        if(!response.length) {
            let obj = {
                day: current.date,
                hours: [`${current.initialTime} - ${current.endingTime}`]   
            }
            response.push(obj)
        }
        else {
            let flag = false
            response.forEach(x => {
                if(current.date === x.day) {
                    x.hours = [...x.hours, `${current.initialTime} - ${current.endingTime}`]
                    flag = true
                }
            })
            if(!flag) {
                let obj = {
                    day: current.date,
                    hours: [`${current.initialTime} - ${current.endingTime}`]   
                }
                response.push(obj)
            }
        }
    })
    return response
}

module.exports = noRepeatedDays