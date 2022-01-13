import React, {useState} from "react";
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {createTurnCourt } from "../Actions/actions"

const validate = (infoCourt) =>{
    let errors={};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPhone = /^([0-9])*$/;
    let regexComments = /^.{1,100}$/;
    let regexPrice = /^[0-9,$]*$/

    if(!infoCourt.name.trim()){
        errors.name = "El campo nombre es requerido"}
    else if (!regexName.test(infoCourt.name.trim())){
        errors.name = "El nombre debe tener solo letras y espacios"}
    
    else if(!infoCourt.sport){
        errors.name = "Debes seleccionar una opción"}
    
    else if(!infoCourt.address.trim()){
        errors.address = "El campo dirección es requerido"}
    
    else if(!infoCourt.phone.trim()){
        errors.phone = "El campo teléfono es requerido (ej: 3515425864)"}
    
    else if(!regexPhone.test(infoCourt.phone.trim())){
        errors.phone = "Debe ser un numero de teléfono"}
        
    
    else if(!infoCourt.price.trim()){
        errors.price = "El campo precio es requerido"}

    else if(regexPrice.test(infoCourt.price.trim())){
        errors.price = "El precio debe llevar enteros o decimales: ej $100 o $150.50"}
    
    else if(!infoCourt.description.trim()){
        errors.description = "El campo características es requerido"}

    else if(!regexComments.test(infoCourt.description.trim())){
        errors.description = "Debe tener un máximo de 100 carácteres"}    

    return errors
}


export default function CourtCreation(){

const dispatch = useDispatch()
 const supplierId = useSelector ((e)=>e.user.supplier.id)
const [infoCourt, setInfoCourt] = useState({
        name: '',
        address: '',
        sport: '',
        phone: '',
        price: '',
        image: '',
        description: '',

})

const [errors, setErrors] = useState({})
const [ createdCourt, setCreatedCourt] = useState(false)
/* const [loading, setLoading] = useState(false)
const [response, setResponse] =useState(null) */

const infoChange = (e) => {
    const { name, value} = e.target
    setInfoCourt({
        ...infoCourt,
        [name]: value
    })
    console.log(infoCourt)
}

const handlerselect =(e) =>{
    setInfoCourt({
        ...infoCourt,
        sport: e.target.value
    })

}

const handleBlur = (e) =>{
    infoChange(e)
    /* handlerselect(e) */
    setErrors(validate(infoCourt))
}

const submitCourt = (e)=>{
    e.preventDefault()
    console.log("este es el console:",infoCourt)
    dispatch(createTurnCourt(supplierId , infoCourt))
    setCreatedCourt(true)
            setTimeout(() => setCreatedCourt(false), 5000 )

}

return (
    <div>
        <form onSubmit={submitCourt}>
            <div>
                <label htmlFor="name">Nombre de Cancha</label>
                <input type="text" 
                placeholder="Nombre" 
                name="name" 
                value={infoCourt.name} 
                onChange={infoChange}
                onBlur={handleBlur}/>
                {errors.name && <p>{errors.name}</p>}
            </div>
            <div>
                <label>Tipo de Cancha</label>
                <select value={infoCourt.sport} onChange={handlerselect}>
                    <option>Deporte</option>
                    <option value="futbol">Futbol</option>
                    <option value="tenis">Tenis</option>
                    <option value="paddle">Paddle</option>
                    <option value="basket">Basket</option>
                    <option value="hockey">Hockey</option>
                    <option value="golf">Golf</option>
                    <option value="baseball">Baseball</option>
                    <option value="otro">Otro</option>
                </select>
                {errors.sport && <p>{errors.sport}</p>}
            </div>
            <div>
                <label htmlFor="address">Ubicación</label>
                <input type="text" 
                placeholder="Dirección" 
                name="address" 
                value={infoCourt.address} 
                onChange={infoChange}
                onBlur={handleBlur}/>
                {errors.address && <p>{errors.address}</p>}
            </div>
            <div>
                <label htmlFor="phone">Teléfono</label>
                <input type="text" 
                placeholder="Numero de Contacto" 
                name="phone" 
                value={infoCourt.phone} 
                onChange={infoChange}
                onBlur={handleBlur}/>
                {errors.phone && <p>{errors.phone}</p>}
            </div>
            <div>
                <label htmlFor="price">Precio</label>
                <input type="text" 
                placeholder="Monto por hora" 
                name="price" 
                value={infoCourt.price} 
                onChange={infoChange}
                onBlur={handleBlur}/>
                {errors.price && <p>{errors.price}</p>}
            </div>
            <div>
                <label htmlFor="image">Imagen</label>
                <input type="text" 
                placeholder="Url " 
                name="image" 
                value={infoCourt.image} 
                onChange={infoChange}/>
            </div>
          
            <div>
                <label htmlFor="description">Características de la Cancha</label>
                <textarea type="text" 
                col="50"
                row="6"
                placeholder="Ej: Futbol 5, Pasto sintetico..." 
                name="description" 
                value={infoCourt.description} 
                onChange={infoChange}
                onBlur={handleBlur}/>
                {errors.description && <p>{errors.description}</p>}
            </div>

            <div>
                <button type='submit'>Guardar</button>
                {setCreatedCourt && <p>Datos guardados con exito</p> }
            </div>
            
        </form>
    </div>

 )
} 