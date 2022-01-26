import "../Css/Registro.css";

import { Link, Redirect, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Map from "./Court/CourtMap/Map";
import { Register } from "../Actions/actions";
import Swal from "sweetalert2";

export default function Registro() {
  const [FormularioEnvidado, cambiarFormularioEnvidado] = useState(false);
  const { user, message_reg, success } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();
  const [infoSupplier, setInfoSupplier] = useState({
    name: "",
    phone: "",
    mail: "",
    cuit: "",
    businessname: "",
    address: "",
    coordinates: "",
    password: "",
    password2: "",
    access: "supplier",
  });

  if (success) {
    Swal.fire({
      title: "Usuario Creado con Exito",
      icon: "success",
      button: "Aceptar",
    });
    history.push("/login");
  }

  const infoChange = (e) => {
    const { name, value } = e.target;
    setInfoSupplier({
      ...infoSupplier,
      [name]: value,
    });
    console.log(infoSupplier);
  };

  /* const handleBlur = (e) => {
   infoChange(e);
    setErrors(validate(infoSupplier));
  }; */

  const submitSupplier = (e) => {
    e.preventDefault();
    console.log("este es el console:", infoSupplier);
    dispatch(Register(infoSupplier));
    cambiarFormularioEnvidado(true);
    setTimeout(() => cambiarFormularioEnvidado(false), 5000);
  };

  /* const validate = (infoSupplier) => {
    let errors = {};
    dispatch({ type: "SET_MESSAGE_REG", payload: "" });

    if (!infoSupplier.name) {
      errors.name = "Por favor ingresa un nombre";
      setDisabled(true);
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(infoSupplier.name)) {
      errors.name = "El nombre puede contener letras y espacios";
      setDisabled(true);
    } else if (!infoSupplier.phone) {
      errors.phone = "Por favor ingresa un teléfono";
      setDisabled(true);
    } else if (!/^([0-9])*$/.test(infoSupplier.phone)) {
      errors.phone = "El teléfono puede contener solo números";
      setDisabled(true);
    } else if (!infoSupplier.cuit) {
      errors.cuit = "Por favor ingresa tu CUIT";
      setDisabled(true);
    } else if (
      !/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(infoSupplier.cuit)
    ) {
      errors.cuit = "Tu cuit debe contar con solo con números";
      setDisabled(true);
    } else if (!infoSupplier.businessname) {
      errors.businessname = "Por favor ingresa tu razon social";
      setDisabled(true);
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(infoSupplier.businessname)) {
      errors.businessname = "La Razon Social puede contener letras y espacios";
      setDisabled(true);
    } else if (!infoSupplier.address) {
      errors.address = "Por favor ingresa tu dirección";
      setDisabled(true);
    } else if (!infoSupplier.mail) {
      errors.mail = "Por favor ingresa un correo electrónico";
      setDisabled(true);
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
        infoSupplier.mail
      )
    ) {
      errors.mail =
        "El correo solo puede contener letras, números, puntos, guiones";
      setDisabled(true);
    } else if (!infoSupplier.password) {
      errors.password = "Por favor ingresa una contraseña";
      setDisabled(true);
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(infoSupplier.password)
    ) {
      errors.password =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
      setDisabled(true);
    } else if (!infoSupplier.password2) {
      errors.password2 = "Por favor ingresa una contraseña";
      setDisabled(true);
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
        infoSupplier.password2
      )
    ) {
      errors.password2 =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
      setDisabled(true);
    } else if (infoSupplier.password !== infoSupplier.password2) {
      errors.password2 = "Las contraseñas no coinciden";
      setDisabled(true);
    } else {
      setDisabled(false);
    }

    return errors;
  }; */


  const handleChange = (e) => {
    
    const { name, value } = e.target

    if (name === "name") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "El nombre sólo puede contener letras y espacios"
        })
        setDisabled(true)
      }
      else {
        setErrors({
          ...errors,
          [name]: ""
        })
        setDisabled(false)
      }
    }
    if (name === "phone") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^([0-9])*$/.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "El teléfono puede contener solo números"
        })
        setDisabled(true)
      }
      else {
        setErrors({
          ...errors,
          [name]: ""
        })
        setDisabled(false)
      }
    }
    if (name === "cuit") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "CUIT inválido"
        })
        setDisabled(true)
      }
      else {
        setErrors({
          ...errors,
          [name]: ""
        })
        setDisabled(false)
      }
    }
    if (name === "businessname") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "La Razon Social solo puede contener letras y espacios"
        })
        setDisabled(true)
      }
      else {
        setErrors({
          ...errors,
          [name]: ""
        })
        setDisabled(false)
      }
    }
    if (name === "mail") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "E-mail inválido"
        })
        setDisabled(true)
      }
      else {
        setErrors({
          ...errors,
          [name]: ""
        })
        setDisabled(false)
      }
    }
    if (name === "password" || name === "password2") {
      setInfoSupplier({
        ...infoSupplier,
        [name]: value
      })
      if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(value) && value !== "") {
        setErrors({
          ...errors,
          [name]: "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos."
        })
        setDisabled(true)
      }
      else {
        if(name === "password") {
          if(value !== infoSupplier.password2 && infoSupplier.password2 !== "") {
            setErrors({
              ...errors,
              [name]: "Las contraseñas no coinciden"
            })
          }
          else {
            setErrors({
              ...errors,
              [name]: ""
            })
            setDisabled(false)
          }
        }
        else {
          if(value !== infoSupplier.password && infoSupplier.password !== "") {
            setErrors({
              ...errors,
              [name]: "Las contraseñas no coinciden"
            })
          }
          else {
            setErrors({
              ...errors,
              [name]: ""
            })
            setDisabled(false)
          }
        }
      }
    }
  }

  return (
    <>
      {!user ? (
        <div className="back-ground-register">
          <div id="contenedor-registro">
            <form onSubmit={submitSupplier} className="formulario-registro">
              <h1 className="titulo-registro">REGISTRO</h1>
              <p className="parrafo-reg">
                Si sos un profesional o empresa que quiere ofrecer nuestro
                servicio de turnos,
                <br />
                completa el siguiente formulario.
              </p>
              <div className="labelinputs">
                <label htmlFor="name"></label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Nombre de Fantasia del negocio"
                  className="in-register"
                  value={infoSupplier.name}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.name && <p className="error-register">{errors.name}</p>}

              <div className="labelinputs">
                <label htmlFor="phone"></label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Teléfono de Contacto"
                  className="in-register"
                  value={infoSupplier.phone}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.phone && (
                <p name="phone" className="error-register">
                  {errors.phone}
                </p>
              )}

              <div className="labelinputs">
                <label htmlFor="cuit"></label>
                <input
                  type="text"
                  id="cuit"
                  name="cuit"
                  placeholder="CUIT"
                  className="in-register"
                  value={infoSupplier.cuit}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.cuit && (
                <p name="cuit" className="error-register">
                  {errors.cuit}
                </p>
              )}
              <div className="labelinputs">
                <label htmlFor="businessname"></label>
                <input
                  type="text"
                  id="businessname"
                  name="businessname"
                  placeholder="Razón Social"
                  className="in-register"
                  value={infoSupplier.businessname}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.businessname && (
                <p name="businessname" className="error-register">
                  {errors.businessname}
                </p>
              )}
              <div className="labelemail">
                <label htmlFor="mail"></label>
                <input
                  type="email"
                  id="mail"
                  name="mail"
                  placeholder="E-mail"
                  className="in-register"
                  value={infoSupplier.mail}
                  onChange={handleChange}
                  required
                 /*  onBlur={handleBlur} */
                />
              </div>
              {errors.mail && (
                <p name="mail" className="error-register error-email">
                  {errors.mail}
                </p>
              )}
              <div>
                <label className="labelinputs" htmlFor="address"></label>
                <Map
                  className="cont-map-cc"
                  setInfoSupplier={setInfoSupplier}
                  infoSupplier={infoSupplier}
                />
              </div>
              {errors.address && (
                <p name="address" className="error-register error-direccion">
                  {errors.address}
                </p>
              )}
              <div className="labelinputs">
                <label htmlFor="password"></label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Contraseña"
                  className="in-register"
                  value={infoSupplier.password}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.password && (
                <p name="password" className="error-register">
                  {errors.password}
                </p>
              )}

              <div className="labelinputs">
                <label htmlFor="contraseña2"></label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="Confirmar Contraseña"
                  className="in-register"
                  value={infoSupplier.password2}
                  onChange={handleChange}
                  required
                  /* onBlur={handleBlur} */
                />
              </div>
              {errors.password2 && (
                <p name="password2" className="error-register">
                  {errors.password2}
                </p>
              )}

              <button
                disabled={disabled}
                type="submit"
                className="buttonSubmitReg"
              >
                Registrar
              </button>
              {FormularioEnvidado && (
                <p className="message-confirm">{message_reg}</p>
              )}
            </form>

            <div className="contenedor-pregunta">
              <h4 className="estas-registrado">¿Ya estas Registrado?</h4>
              <Link to="/login">
                <h4 className="inciar-sesion">Iniciar Sesión</h4>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </>
  );
}
