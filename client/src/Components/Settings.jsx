import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

import {
  DeleteButton,
  DivForm,
  DivGlobal,
  EditButton,
  H1name,
  LabelSetting,
} from "../Styles/settingsSupplier";
import React, { useState } from "react";
import { changeSupplierProfile, deleteUser } from "../Actions/actions";

import { confirmAlert } from "react-confirm-alert"; // Import
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Settings() {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = window.localStorage.getItem("loguodeusuario");
  const supplier = JSON.parse(user);
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
    window.localStorage.setItem("loguodeusuario", JSON.stringify(info));
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
            window.localStorage.removeItem("loguodeusuario");
            history.push("/");
            window.location.reload(false);
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
          <DeleteButton onClick={handleClick}>Borrar Usuario</DeleteButton>
          <DivForm>
            <LabelSetting>
              Nombre
              <input name="name" value={info.name} />
            </LabelSetting>
            {/* <LabelSetting>
          Apellido
          <input
            name="lastname"
            value={info.lastname}
            onChange={handleChange}
          />
        </LabelSetting> */}
            <LabelSetting>
              Email
              <input name="mail" value={info.mail} />
            </LabelSetting>
            <LabelSetting>
              Cuit
              <input name="cuit" value={info.cuit} />
            </LabelSetting>
            <LabelSetting>
              Razón Social
              <input name="businessname" value={info.businessname} />
            </LabelSetting>
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
            {/* <LabelSetting>
          Apellido
          <input
            name="lastname"
            value={info.lastname}
            onChange={handleChange}
          />
        </LabelSetting> */}
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
