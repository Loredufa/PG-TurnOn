const { Contact } = require("../../../db")

const createContact = async (req, res) => {

    const { name,  mail, phone, message, origin  } = req.body
    console.log(req.body)
    let newContact = await Contact.create ({
        name,
        mail,
        phone,
        message,
        origin,
    })
    newContact = await newContact.save().catch(err => {
        console.log(err)
        res.json({ error: "No se puede enviar el mensaje" })
    })
    if (newContact) res.json({ message: "El mensaje se ha enviado, gracias por contactarnos" })
}

module.exports= {createContact}