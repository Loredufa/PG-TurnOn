import {
  DivForm,
  DivGlobal,
  EditButton,
  H1name,
  LabelSetting,
} from "../Styles/settingsSupplier";
import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

export default function Settings() {
  const { supplier } = useSelector((state) => state.user);

  const [info, setInfo] = useState({
    name: supplier.name,
    lastname: supplier.lastname,
    mail: supplier.mail,
    password: supplier.password,
    cuit: supplier.cuit,
    businessname: supplier.businessname,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo({
      ...info,
      [name]: value,
    });
  };

  return (
    <DivGlobal>
      <H1name>Configuración/Perfil</H1name>
      <EditButton>Editar</EditButton>
      <DivForm>
        <LabelSetting>
          Nombre
          <input name="name" value={info.name} onChange={handleChange} />
        </LabelSetting>
        <LabelSetting>
          Apellido
          <input
            name="lastname"
            value={info.lastname}
            onChange={handleChange}
          />
        </LabelSetting>
        <LabelSetting>
          Email
          <input name="mail" value={info.mail} onChange={handleChange} />
        </LabelSetting>
        <LabelSetting>
          Cuit
          <input name="cuit" value={info.cuit} onChange={handleChange} />
        </LabelSetting>
        <LabelSetting>
          Nombre / Empresa
          <input
            name="businessname"
            value={info.businessname}
            onChange={handleChange}
          />
        </LabelSetting>
      </DivForm>
    </DivGlobal>
  );
}
