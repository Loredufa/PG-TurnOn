export const orderHours = (array) => {
    return array.sort((a, b) => {
        if (Number(a.start.slice(0, 2)) > Number(b.start.slice(0, 2))) return 1
        if (Number(a.start.slice(0, 2)) < Number(b.start.slice(0, 2))) return -1
        return 0 
    })
}