import "react-confirm-alert/src/react-confirm-alert.css";
import "../Styles/settingsSupplier.css";

import {
  DeleteButton,
  DivBrowser,
  DivForm,
  DivGlobal,
  DivImagen,
  EditButton,
  EditButton2,
  H1name,
  LabelSetting,
  LabelSetting2,
  UpdateButton,
  VolverButton,
} from "../Styles/settingsSupplier";
import { ErrorMessage, Field, Form, Formik } from "formik";
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
  const [imagen, setImagen] = useState(supplier.image);
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
            dispatch(deleteUser(supplier.id));
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
    setImagen(file.secure_url);
  };

  return (
    <Formik
      initialValues={{
        name: supplier.name,
        id: supplier.id,
        image: supplier.image,
        mail: supplier.mail,
        password: supplier.password,
        cuit: supplier.cuit,
        businessname: supplier.businessname,
      }}
      validate={(values) => {
        let errors = {};

        if (!values.name.trim()) {
          errors.name = "Por favor ingresa un nombre";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name = "El nombre puede contener letras y espacios";
        }

        if (!values.mail.trim()) {
          errors.mail = "Por favor ingresa un mail";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.mail)
        ) {
          errors.mail =
            "El correo solo puede contener letras, numeros, puntos, guiones";
        }

        if (!values.cuit.trim()) {
          errors.cuit = "Por favor ingresa tu CUIT";
        } else if (
          !/^([0-9]{11}|[0-9]{2}-[0-9]{8}-[0-9]{1})$/g.test(values.cuit)
        ) {
          errors.cuit = "Tu cuit debe contar con solo con numeros";
        }

        if (!values.businessname.trim()) {
          errors.businessname = "Por favor ingresa tu razon social";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.businessname)) {
          errors.businessname =
            "La Razon Social puede contener letras y espacios";
        }
        return errors;
      }}
      onSubmit={(values) => {
        dispatch(
          changeSupplierProfile(values.id, {
            ...values,
            image: imagen,
          })
        );
        setEdit(false);
      }}
    >
      {({ errors, values }) =>
        !edit ? (
          <Form>
            <DivGlobal>
              <H1name>Configuración/Perfil</H1name>
              <DivForm>
                <EditButton onClick={() => setEdit(true)}>Editar</EditButton>
                <LabelSetting2>
                  Nombre:
                  <label>{values.name}</label>
                </LabelSetting2>
                <LabelSetting2>
                  Email:
                  <label>{values.mail}</label>
                </LabelSetting2>
                <LabelSetting2>
                  Cuit:
                  <label>{values.cuit}</label>
                </LabelSetting2>
                <LabelSetting2>
                  Razón Social:
                  <label>{values.businessname}</label>
                </LabelSetting2>
              </DivForm>
            </DivGlobal>
          </Form>
        ) : (
          <Form>
            <DivGlobal>
              <H1name>Configuración/Perfil</H1name>
              <DivForm>
                {Object.values(errors).length > 0 ? (
                  <EditButton2 type="submit" disabled={true}>
                    Guardar
                  </EditButton2>
                ) : (
                  <EditButton2 type="submit" disabled={false}>
                    Guardar
                  </EditButton2>
                )}
                <VolverButton onClick={() => setEdit(false)}>
                  volver
                </VolverButton>
                <UpdateButton onClick={editPwdClick}>
                  Editar Contraseña
                </UpdateButton>
                <DeleteButton onClick={handleClick}>
                  Borrar Usuario
                </DeleteButton>
                <LabelSetting>
                  Nombre
                  <Field name="name" type="text" id="name" />
                </LabelSetting>
                <ErrorMessage
                  name="name"
                  component={() => <p>{errors.name}</p>}
                />
                <LabelSetting>
                  Email
                  <Field name="mail" type="text" id="mail" />
                </LabelSetting>
                <ErrorMessage
                  name="mail"
                  component={() => <p>{errors.mail}</p>}
                />
                <LabelSetting>
                  Cuit
                  <Field name="cuit" type="text" id="cuit" />
                </LabelSetting>
                <ErrorMessage
                  name="cuit"
                  component={() => <p>{errors.cuit}</p>}
                />
                <LabelSetting>
                  Razón Social
                  <Field name="businessname" type="text" id="businessname" />
                </LabelSetting>
                <ErrorMessage
                  name="businessname"
                  component={() => <p>{errors.businessname}</p>}
                />
              </DivForm>
              <DivImagen>
                <div className="divcont">
                  <label
                    className="label-all-cc label-image-cc"
                    htmlFor="image"
                  >
                    Imagen De Perfil:
                  </label>
                  <br />
                  {values.image && (
                    <img
                      src={imagen}
                      alt="Imagen"
                      width="250px"
                      height="150px"
                    />
                  )}
                  <br />

                  <DivBrowser
                    type="file"
                    name="image"
                    className="file"
                    id="file-input"
                    onChange={uploadImage}
                  />
                  <label className="browseL" htmlFor="file-input">
                    SELECCIONAR ARCHIVO
                  </label>
                </div>
              </DivImagen>
            </DivGlobal>
          </Form>
        )
      }
    </Formik>
  );
}
