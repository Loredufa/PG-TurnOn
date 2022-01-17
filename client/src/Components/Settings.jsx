import "react-confirm-alert/src/react-confirm-alert.css";

import {
  DeleteButton,
  DivForm,
  DivGlobal,
  EditButton,
  H1name,
  LabelSetting,
  LabelSetting2,
  UpdateButton,
} from "../Styles/settingsSupplier";
import React, { useState } from "react";
import { changeSupplierProfile, deleteUser } from "../Actions/actions";
import { useDispatch, useSelector } from "react-redux";

import { confirmAlert } from "react-confirm-alert";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const { supplier } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const [botonActivo, setBotonActivo] = useState(false);
  const [error, setError] = useState({});
  const [info, setInfo] = useState({
    name: supplier.name,
    id: supplier.id,
    mail: supplier.mail,
    password: supplier.password,
    cuit: supplier.cuit,
    businessname: supplier.businessname,
  });

  const validacion = (info) => {
    let error = {};
    if (!info.name.trim()) {
      error.name = "Por favor ingresa un nombre";
      setBotonActivo(true);
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.name)) {
      error.name = "El nombre puede contener letras y espacios";
      setBotonActivo(true);
    } else if (!info.mail.trim()) {
      error.mail = "Por favor ingresa un mail";
      setBotonActivo(true);
    } else if (
      !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(info.mail)
    ) {
      error.mail =
        "El correo solo puede contener letras, numeros, puntos, guiones";
      setBotonActivo(true);
    } else if (!info.cuit.trim()) {
      error.cuit = "Por favor ingresa tu CUIT";
      setBotonActivo(true);
    } else if (!/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(info.cuit)) {
      error.cuit = "Tu cuit debe contar con solo con numeros";
      setBotonActivo(true);
    } else if (!info.businessname.trim()) {
      error.businessname = "Por favor ingresa tu razon social";
      setBotonActivo(true);
    } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(info.businessname)) {
      error.businessname = "La Razon Social puede contener letras y espacios";
      setBotonActivo(true);
    } else {
      setBotonActivo(false);
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setError(validacion(info));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeSupplierProfile({ id: supplier.id, info }));
    setEdit(false);
  };

  const editPwdClick = () => {
    history.push("/profile/password");
  };
  const handleClick = () => {
    confirmAlert({
      title: "Borrar Usuario",
      message: "Estas seguro de hacer esto?",
      buttons: [
        {
          label: "Si",
          onClick: () => {
            dispatch(deleteUser(info.id));
            setTimeout(() => {
              history.push("/");
              window.localStorage.removeItem("loguodeusuario");
              window.location.reload(false);
            }, 500);
          },
        },
        {
          label: "No",
          onClick: null,
        },
      ],
    });
  };

  return (
    <>
      {!edit ? (
        <DivGlobal>
          <H1name>Configuración/Perfil</H1name>
          <EditButton onClick={() => setEdit(true)}>Editar</EditButton>
          <DivForm>
            <LabelSetting2>
              Nombre:
              <label>{info.name}</label>
            </LabelSetting2>
            <LabelSetting2>
              Email:
              <label>{info.mail}</label>
            </LabelSetting2>
            <LabelSetting2>
              Cuit:
              <label>{info.cuit}</label>
            </LabelSetting2>
            <LabelSetting2>
              Razón Social:
              <label>{info.businessname}</label>
            </LabelSetting2>
          </DivForm>
        </DivGlobal>
      ) : (
        <DivGlobal>
          <H1name>Configuración/Perfil</H1name>
          <EditButton
            onClick={handleSubmit}
            type="button"
            disabled={botonActivo}
          >
            Guardar
          </EditButton>
          <UpdateButton onClick={editPwdClick}>Editar Contraseña</UpdateButton>
          <DeleteButton onClick={handleClick}>Borrar Usuario</DeleteButton>
          <DivForm>
            <LabelSetting>
              Nombre
              <input
                name="name"
                value={info.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.name && <p>{error.name}</p>}
            </LabelSetting>
            <LabelSetting>
              Email
              <input
                name="mail"
                value={info.mail}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.mail && <p>{error.mail}</p>}
            </LabelSetting>
            <LabelSetting>
              Cuit
              <input
                name="cuit"
                value={info.cuit}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.cuit && <p>{error.cuit}</p>}
            </LabelSetting>
            <LabelSetting>
              Razón Social
              <input
                name="businessname"
                value={info.businessname}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {error.businessname && <p>{error.businessname}</p>}
            </LabelSetting>
          </DivForm>
        </DivGlobal>
      )}
    </>
  );
}
