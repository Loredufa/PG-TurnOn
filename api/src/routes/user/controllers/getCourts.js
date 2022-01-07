const getCourts = async (req, res) => {

    const { sport } = req.query
    let courts
    if (sport) {
        courts = await Court.findAll({ where: { sport }})
    } 
    else {
        courts = await Court.findAll({})
    }
    res.json(courts)
}