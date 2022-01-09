import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function Settings() {
    
    const { supplier } = useSelector(state => state.user)

    const [info, setInfo] = useState({
        name: supplier.name,
        lastname: supplier.lastname,
        mail: supplier.mail,
        password: supplier.password,
        cuit: supplier.cuit,
        businessname: supplier.businessname
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setInfo({
            ...info,
            [name]: value
        })
    } 

    return (
        <div>
            <input name="name" value={info.name} onChange={handleChange}/>
            <input name="lastname" value={info.lastname} onChange={handleChange}/>
            <input name="mail" value={info.mail} onChange={handleChange}/>
            <input name="cuit" value={info.cuit} onChange={handleChange}/>
            <input name="businessname" value={info.businessname} onChange={handleChange}/>
        </div>
    )
}
