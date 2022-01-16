import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Map from "./Court/CourtMap/Map";
import { createTurnCourt } from "../Actions/actions";
import "../Css/Supplier Panel/courtcreation.css";
import {useHistory } from 'react-router-dom';
import Swal from "sweetalert2";



export default function CourtCreation() {
  const dispatch = useDispatch();
  const supplierId = useSelector((e) => e.user.supplier.id);
  const [enviado, setEnviado] = useState(false);
  const [ disabled, setDisabled] = useState(false)
  const history = useHistory()
  const [infoCourt, setInfoCourt] = useState({
    name: "",
    address: "",
    sport: "",
    phone: "",
    price: "",
    image: "",
    description: "",
  });

  const [errors, setErrors] = useState({});

  const infoChange = (e) => {
    const { name, value } = e.target;
    setInfoCourt({
      ...infoCourt,
      [name]: value,
    });
    console.log(infoCourt);
  };

  const handlerselect = (e) => {
    setInfoCourt({
      ...infoCourt,
      sport: e.target.value,
    });
  };

  const handleBlur = (e) => {
    infoChange(e);
    setErrors(validate(infoCourt));
  };

  const submitCourt = (e) => {
    e.preventDefault();
    console.log("este es el console:", infoCourt);
    dispatch(createTurnCourt(supplierId, infoCourt));
    setInfoCourt({
      name: "",
      address: "",
      sport: "",
      phone: "",
      price: "",
      image: "",
      description: "",
    });
    setEnviado(true);
    setTimeout(() => setEnviado(false), 1000);
  };

  if(enviado === true){
    Swal.fire({
      title:'Cancha Creada con exito',
      icon: 'success',
      button: 'Aceptar',
      })
    history.push('/profile/courts')
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
    setInfoCourt({
      ...infoCourt,
      image: file.secure_url,
    });
  };

  const validate = (infoCourt) => {
    let errors = {};
    let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    let regexPhone = /^([0-9])*$/;
    let regexComments = /^.{1,100}$/;
    let regexPrice = /^[0-9,$]*$/;
  
    if (!infoCourt.name.trim()) {
      errors.name = "El campo nombre es requerido";
      setDisabled(true);
    } else if (!regexName.test(infoCourt.name.trim())) {
      errors.name = "El nombre debe tener solo letras y espacios";
      setDisabled(true);
    } else if (!infoCourt.sport) {
      errors.name = "Debes seleccionar una opción";
      setDisabled(true);
    } else if (!infoCourt.address.trim()) {
      errors.address = "El campo dirección es requerido";
      setDisabled(true);
    } else if (!infoCourt.phone.trim()) {
      errors.phone = "El campo teléfono es requerido (ej: 3515425864)";
      setDisabled(true);
    } else if (!regexPhone.test(infoCourt.phone.trim())) {
      errors.phone = "Debe ser un numero de teléfono";
      setDisabled(true);
    } else if (!infoCourt.price.trim()) {
      errors.price = "El campo precio es requerido";
      setDisabled(true);
    } else if (regexPrice.test(infoCourt.price.trim())) {
      errors.price =
        "El precio debe llevar enteros o decimales: ej $100 o $150.50";
        setDisabled(true);
    } else if (!infoCourt.description.trim()) {
      errors.description = "El campo características es requerido";
      setDisabled(true);
    } else if (!regexComments.test(infoCourt.description.trim())) {
      errors.description = "Debe tener un máximo de 100 carácteres";
      setDisabled(true);
    } else{
      setDisabled(false)
    }
  
    return errors;
  };

  return (
    <div className="contenedor-form-createcourt">
      <h1 className="title-creationcourt">Datos para creación de Cancha</h1>
      <form onSubmit={submitCourt} className="form-createcourt">
        <div className="cont-all-cc cont-in-name-cc">
          <label className="label-all-cc label-name-cc" htmlFor="name">Nombre de Cancha</label>
          <input
            className="input-all-cc input-name-cc"
            type="text"
            placeholder="Nombre"
            name="name"
            value={infoCourt.name}
            onChange={infoChange}
            onBlur={handleBlur}
          />
          {errors.name && <p className="error-all-cc">{errors.name}</p>}
        </div>

        <div className="cont-all-cc cont-in-sport-cc">
          <label className="label-all-cc label-sport-cc">Tipo de Cancha</label>
          <select className="select-cc" 
          value={infoCourt.sport} 
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

        <div className="cont-all-cc cont-in-address-cc">
          <label className="label-all-cc label-address-cc" 
          htmlFor="address">Ubicación</label>
          <Map className="cont-map-cc" setInfoCourt={setInfoCourt} infoCourt={infoCourt}/>
        
          {errors.address && <p className="error-all-cc">{errors.address}</p>}
        </div>

        <div className="cont-all-cc cont-in-price-cc">
          <label className="label-all-cc label-price-cc" htmlFor="price">Precio por hora</label>
          <input
            className="input-all-cc input-price-cc"
            type="text"
            placeholder="Ej: $200"
            name="price"
            value={infoCourt.price}
            onChange={infoChange}
            onBlur={handleBlur}
          />
          {errors.price && <p className="error-all-cc">{errors.price}</p>}
        </div>

        <div className="cont-all-cc cont-in-phone-cc">
          <label className="label-all-cc label-phone-cc" htmlFor="phone">Teléfono</label>
          <input
            className="input-all-cc input-phone-cc"
            type="text"
            placeholder="Numero de Contacto (0351155485654)"
            name="phone"
            value={infoCourt.phone}
            onChange={infoChange}
            onBlur={handleBlur}
          />
          {errors.phone && <p className="error-all-cc">{errors.phone}</p>}
        </div>
        
        <div className="cont-in-image-cc">
          <label className="label-all-cc label-image-cc" htmlFor="image">Imagen</label>
          <input className="input-image-cc" type="file" name="file" onChange={uploadImage} />
        </div>

        <div className="cont-all-cc cont-in-description-cc">
          <label className="label-all-cc label-image-cc" htmlFor="description">Características de la Cancha</label>
          <textarea
            className="input-all-cc input-description-cc"
            type="text"
            col="50"
            row="6"
            placeholder="Ej: Futbol 5, Pasto sintetico..."
            name="description"
            value={infoCourt.description}
            onChange={infoChange}
            onBlur={handleBlur}
          />
          {errors.description && <p className="error-all-cc">{errors.description}</p>}
        </div>
        <div>
          <button disabled={disabled} className="button-save-cc" type="submit">Guardar</button>
          {enviado && <p className="menssage-cc">Datos guardados con exito</p>}
        </div>
      </form>
    </div>
  );
}
