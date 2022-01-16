import {
  DivForm,
  DivGlobal,
  GuardarButton,
  H1name,
  LabelSetting,
  VolverButton,
} from "../Styles/updatePassword";
import React, { useState } from "react";

import axios from "axios";
// import { updatePassword } from "../Actions/actions";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

function UpdatePassword() {
  const { id } = useSelector((state) => state.user.supplier);
  // const dispatch = useDispatch();
  const history = useHistory();
  const [botonActivo, setBotonActivo] = useState(false);
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    repeatPassword: "",
  });
  const [error, setError] = useState({});
  const [responseput, setResponsePut] = useState(null);
  const { oldPassword, newPassword } = password;
  const validacion = (password) => {
    let error = {};
    if (!password.oldPassword.trim()) {
      error.oldPassword = "Ingrese su contraseña actual porfavor";
      setBotonActivo(true);
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password.oldPassword)
    ) {
      error.oldPassword =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
    } else if (!password.newPassword.trim()) {
      error.newPassword = "Ingrese su nueva contraseña porfavor";
      setBotonActivo(true);
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(password.newPassword)
    ) {
      error.newPassword =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
    } else if (!password.repeatPassword.trim()) {
      error.repeatPassword = "Ingrese nuevamente su nueva contraseña porfavor";
      setBotonActivo(true);
    } else if (
      !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(
        password.repeatPassword
      )
    ) {
      error.repeatPassword =
        "La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos.";
    } else if (password.newPassword !== password.repeatPassword) {
      error.repeatPassword = "Las contraseñas no coinciden";
      setBotonActivo(true);
    } else {
      setBotonActivo(false);
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPassword({
      ...password,
      [name]: value,
    });
  };

  const handleClickBack = () => {
    history.push("/profile/settings");
  };

  const handleClickConfirm = () => {
    // dispatch(updatePassword(id, oldPassword, newPassword));
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
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validacion(password));
  };

  if (responseput?.success) {
    alert(responseput.success);
    history.push("/profile/settings");
  }

  return (
    <DivGlobal>
      <H1name>Cambiar Contraseña</H1name>
      <DivForm>
        <GuardarButton onClick={handleClickConfirm} disabled={botonActivo}>
          Confirmar
        </GuardarButton>
        <VolverButton onClick={handleClickBack}>Volver</VolverButton>
        <LabelSetting>
          Password Actual
          <input
            name="oldPassword"
            type="password"
            value={password.oldPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.oldPassword && <p>{error.oldPassword}</p>}
        </LabelSetting>
        <LabelSetting>
          Nueva Password
          <input
            name="newPassword"
            type="password"
            value={password.newPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.newPassword && <p>{error.newPassword}</p>}
        </LabelSetting>
        <LabelSetting>
          Reingresar Password
          <input
            name="repeatPassword"
            type="password"
            value={password.repeatPassword}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {error.repeatPassword && <p>{error.repeatPassword}</p>}
        </LabelSetting>
      </DivForm>
      {responseput?.error && <p>{responseput.error}</p>}
    </DivGlobal>
  );
}

export default UpdatePassword;
