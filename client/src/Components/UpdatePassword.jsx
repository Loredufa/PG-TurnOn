import "../Styles/updatePassword.css";

import {
  DivForm,
  DivGlobal,
  GuardarButton,
  H1name,
  LabelSetting,
  VolverButton,
} from "../Styles/updatePassword";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdatePassword() {
  const { id } = useSelector((state) => state.user.supplier);
  const history = useHistory();

  const [responseput, setResponsePut] = useState(null);

  const handleClickBack = () => {
    history.push("/profile/settings");
  };
  if (responseput?.success) {
    alert(responseput.success);
    history.push("/profile/settings");
  }
  return (
    <>
      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          repeatPassword: "",
        }}
        validate={(values) => {
          let errors = {};

          if (!values.oldPassword.trim()) {
            errors.oldPassword = "Ingrese su contraseña actual porfavor";
          } else if (
            !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
              values.oldPassword
            )
          ) {
            errors.oldPassword =
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
          }

          if (!values.newPassword.trim()) {
            errors.newPassword = "Ingrese su nueva contraseña porfavor";
          } else if (
            !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
              values.newPassword
            )
          ) {
            errors.newPassword =
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
          }

          if (!values.repeatPassword.trim()) {
            errors.repeatPassword =
              "Ingrese nuevamente su nueva contraseña porfavor";
          } else if (
            !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
              values.repeatPassword
            )
          ) {
            errors.repeatPassword =
              "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
          }

          if (values.newPassword !== values.repeatPassword) {
            errors.repeatPassword = "Las contraseñas no coinciden";
          }

          return errors;
        }}
        onSubmit={(values) => {
          const { oldPassword, newPassword } = values;
          axios
            .put(`http://localhost:3001/supplier/supplier/password/${id}`, {
              oldPassword,
              newPassword,
            })
            .then((respuesta) => {
              setResponsePut(respuesta.data);
            })
            .catch((err) => {
              throw err;
            });
        }}
      >
        {({ errors }) => (
          <DivGlobal>
            <H1name>Cambiar Contraseña</H1name>
            <DivForm>
              <Form>
                <GuardarButton type="submit">Confirmar</GuardarButton>
                <VolverButton onClick={handleClickBack}>Volver</VolverButton>
                <LabelSetting>
                  Password Actual
                  <Field name="oldPassword" type="password" id="oldPassword" />
                </LabelSetting>
                <ErrorMessage
                  name="oldPassword"
                  component={() => <p>{errors.oldPassword}</p>}
                />
                <LabelSetting>
                  Nueva Password
                  <Field name="newPassword" type="password" id="newPassword" />
                </LabelSetting>
                <ErrorMessage
                  name="newPassword"
                  component={() => <p>{errors.newPassword}</p>}
                />
                <LabelSetting>
                  Reingresar Password
                  <Field
                    name="repeatPassword"
                    type="password"
                    id="repeatPassword"
                  />
                </LabelSetting>
                <ErrorMessage
                  name="repeatPassword"
                  component={() => <p>{errors.repeatPassword}</p>}
                />
              </Form>
            </DivForm>
            {responseput?.error && <p className="p">{responseput.error}</p>}
          </DivGlobal>
        )}
      </Formik>
    </>
  );
}

export default UpdatePassword;
