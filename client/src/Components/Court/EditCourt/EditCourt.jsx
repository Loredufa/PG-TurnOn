import axios from "axios";
import React, { useState, useContext } from "react";
import { CourtContext } from '../Context/CourtContext'
import Swal from "sweetalert2";


export default function EditCourt (){
    const { currentCourt, setSection } = useContext(CourtContext)
    const [errors, setErrors] = useState({});
    const [ disabled, setDisabled] = useState(false)
    console.log("QUE VIENE DE CURRENT", currentCourt )

    const [ editInfo, SetEditInfo] = useState({
    name: currentCourt.name,
    address: currentCourt.address,
    sport: currentCourt.sport,
    phone: currentCourt.phone,
    price: currentCourt.price,
    image: currentCourt.image,
    description: currentCourt.description,
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        SetEditInfo({
        ...editInfo,
        [name]: value,
    });
    }

    const handlerselect = (e) => {
        SetEditInfo({
          ...editInfo,
          sport: e.target.value,
        });
      };
    
      const handleBlur = (e) => {
        handleChange(e);
        setErrors(validate(editInfo))
    
      };

      const submitCourt = (e) =>{
        e.preventDefault() 
        axios.put(`/supplier/court/${currentCourt.id}`, editInfo)
        .then(response => {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data.message,
              showConfirmButton: false,
              timer: 1200
            })
          setTimeout(() => window.location.reload(), 1200)})
        .catch (error => { console.log(error)})
      }


      const uploadImage = async (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "turnon");
    
        const respuesta = await fetch(
          "https://api.cloudinary.com/v1_1/duijak4ks/upload",
          {
            method: "POST",
            body: data,
          }
        );
    
        const file = await respuesta.json();
        console.log(file.secure_url);
        SetEditInfo({
          ...editInfo,
          image: file.secure_url,
        });
      };

      const validate = (editInfo) => {
        let errors = {};
        let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
        let regexComments = /^.{1,100}$/;
        let regexPrice = /^[0-9]+[.,]{1,1}\[0]{2,2}$/;
      
        if (!editInfo.name.trim()) {
          errors.name = "El campo nombre es requerido";
          setDisabled(true);
        } else if (!regexName.test(editInfo.name.trim())) {
          errors.name = "El nombre debe tener solo letras y espacios";
          setDisabled(true);
        } else if (!editInfo.sport) {
          errors.sport = "Debes seleccionar una opción";
          setDisabled(true);
        } else if (!editInfo.price.trim()) {
          errors.price = "El campo precio es requerido";
          setDisabled(true);
        } else if (regexPrice.test(editInfo.price.trim())) {
          errors.price =
            "El precio debe llevar enteros ej 100";
            setDisabled(true);
        } else if (!editInfo.description.trim()) {
          errors.description = "El campo características es requerido";
          setDisabled(true);
        } else if (!regexComments.test(editInfo.description.trim())) {
          errors.description = "Debe tener un máximo de 100 carácteres";
          setDisabled(true);
        } else{
          setDisabled(false)
        }
      
        return errors;
      };

    return(
        <div className="contenedor-form-createcourt">
        <h1 className="title-creationcourt">Editar datos de tu Cancha</h1>
        <button onClick={() => setSection("")}>Volver</button>
        <form onSubmit={submitCourt} className="form-createcourt">
          <div className="cont-all-cc cont-in-name-cc">
            <label className="label-all-cc label-name-cc" htmlFor="name">Nombre de Cancha :</label>
            <input
              className="input-all-cc input-name-cc"
              type="text"
              placeholder="Nombre"
              name="name"
              value={editInfo.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && <p className="error-all-cc">{errors.name}</p>}
          </div>
  
          <div className="cont-all-cc cont-in-sport-cc">
            <label className="label-all-cc label-sport-cc">Tipo de Cancha :</label>
            <select className="select-cc" 
            value={editInfo.sport} 
            onChange={handlerselect}>
              <option className="options-cc">Deporte</option>
              <option className="options-cc"value="futbol">Futbol</option>
              <option className="options-cc"value="tenis">Tenis</option>
              <option className="options-cc" value="paddle">Paddle</option>
              <option className="options-cc" value="basket">Basket</option>
              <option className="options-cc" value="hockey">Hockey</option>
              <option className="options-cc" value="golf">Golf</option>
              <option className="options-cc" value="baseball">Baseball</option>
              <option className="options-cc" value="otro">Otro</option>
            </select>
           {errors.sport && <p className="error-all-cc">{errors.sport}</p>}
          </div>
  
          <div className="cont-all-cc cont-in-price-cc">
            <label className="label-all-cc label-price-cc" htmlFor="price">Precio $ :</label>
            <input
              className="input-all-cc input-price-cc"
              type="text"
              placeholder="Monto por hora Ej: $200"
              name="price"
              value={editInfo.price}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.price && <p className="error-all-cc">{errors.price}</p>}
          </div>
  
          {/* <div className="cont-all-cc cont-in-phone-cc">
            <label className="label-all-cc label-phone-cc" htmlFor="phone">Teléfono :</label>
            <input
              className="input-all-cc input-phone-cc"
              type="text"
              placeholder="Numero de Contacto (0351155485654)"
              name="phone"
              value={editInfo.phone}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {{errors.phone && <p className="error-all-cc">{errors.phone}</p>}}
          </div> */}
          
          <div className="cont-in-image-cc">
            <label className="label-all-cc label-image-cc" htmlFor="image">Imagen : </label><br/>
            <img src={editInfo.image} alt="Imagen" width= "250px" height="150px"/>
            <input className="input-image-cc" type="file" name="file" onChange={uploadImage} />
          </div>
  
          <div className="cont-all-cc cont-in-description-cc">
            <label className="label-all-cc label-image-cc" htmlFor="description">Características de la Cancha :</label>
            <textarea
              className="input-all-cc input-description-cc"
              type="text"
              col="50"
              row="6"
              placeholder="Ej: Futbol 5, Pasto sintetico..."
              name="description"
              value={editInfo.description}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.description && <p className="error-all-cc">{errors.description}</p>}
          </div>
          <div>
            <button disabled={disabled} className="button-save-cc" type="submit">Guardar</button>
          </div>
        </form>
      </div>
    )
}