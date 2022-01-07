import "../Css/login.css";

import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";

import { Formik } from "formik";

function Login2() {
  let array = [
    {
      usuario: "asd@asd.com",
      password: "niko123",
    },
    {
      usuario: "assd@assd.com",
      password: "niko123",
    },
  ];
  const history = useHistory();
  const [formEnviado, setFormEnviado] = useState(false);
  return (
    <div className="divPrincipal">
      <div className="subdivPrincipal">
        <Formik
          initialValues={{
            usuario: "",
            password: "",
          }}
          validate={(valores) => {
            let errores = {};
            if (!valores.usuario) {
              errores.usuario = "Por favor ingresa un correo electronico";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                valores.usuario
              )
            ) {
              errores.usuario =
                "El mail solo puedo contener letras, numeros, puntos, guiones, y guion bajo.";
            }
            if (!valores.password) {
              errores.password = "Por favor ingrese el password";
            }

            return errores;
          }}
          onSubmit={(valores, { resetForm }) => {
            resetForm();
            array.unshift(valores);
            console.log("formulario enviado");
            console.log(array);
            setFormEnviado(true);
            // setTimeout(() => setFormEnviado(false), 5000);
            setTimeout(() => history.push("/registro"), 500);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="elementos">
                <div className="ingresar">
                  <h1>INGRESAR</h1>
                </div>
                <div className="divLabels">
                  <div className="divLabel1">
                    {/* <label className="label1" htmlFor="usuario">
                    Email
                  </label> */}
                    <input
                      className="input"
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="username"
                      value={values.usuario}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.usuario && errors.usuario && (
                      <div className="error1">{errors.usuario}</div>
                    )}
                  </div>
                  <div className="divLabel2">
                    {/* <label className="label2" htmlFor="password">
                    Contraseña
                  </label> */}
                    <input
                      className="input2"
                      type="password"
                      id="password"
                      name="password"
                      placeholder="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    {touched.password && errors.password && (
                      <div className="error2">{errors.password}</div>
                    )}
                  </div>
                </div>
                <button className="boton" type="submit">
                  Login
                </button>
                {/* {formEnviado && <p>Formulario enviado con exito!</p>} */}
              </div>
              {console.log(array)}
            </form>
          )}
        </Formik>
      </div>
      <h4 className="no-estas-registrado">¿No estas Registrado?</h4>
      <Link to="/registro">
        <h4 className="registrate">Registrate</h4>
      </Link>
    </div>
  );
}

export default Login2;
