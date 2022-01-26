import { Button, Modal, TextField } from "@material-ui/core";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import React, { useEffect, useState } from "react";

import MaterialTable from "@material-table/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const columnas = [
  {
    title: "Id",
    field: "id",
  },
  {
    title: "Nombre",
    field: "name",
  },
  {
    title: "Apellido",
    field: "lastname",
  },
  {
    title: "Telefono",
    field: "phone",
  },
  {
    title: "Contraseña",
    field: "password",
  },
  {
    title: "Mail",
    field: "mail",
  },
];

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  iconos: {
    cursor: "pointer",
  },
  inputMaterial: {
    width: "100%",
  },
}));

function User() {
  useEffect(() => {
    allUsers();
  }, []);

  const [selectedRow, setSelectedRow] = useState(null);
  const [data, setData] = useState([]);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [user, setUser] = useState({
    name: "",
    lastname: "",
    phone: "",
    password: "",
    mail: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const styles = useStyles();

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const selectUser = (user, caso) => {
    setUser(user);
    if (caso === "Editar") abrirCerrarModalEditar();
    if (caso === "Eliminar") abrirCerrarModalEliminar();
  };

  const allUsers = async () => {
    await axios.get("/user/users").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const createUsers = async () => {
    await axios
      .post("/user/user", user)
      .then(() => {
        axios
          .get("/user/users")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    abrirCerrarModalInsertar();
  };

  const peticionPut = async () => {
    await axios
      .put(`/user/user/${user.id}`, user)
      .then(() => {
        axios
          .get("/user/users")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => console.log(error));
    setModalEditar();
  };

  const peticionDelete = async () => {
    await axios
      .delete(`/user/user/${user.id}`)
      .then((response) => {
        setData(data.filter((euser) => euser.id !== user.id));
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Crear Nuevo Usuario</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre"
        name="name"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Apellido"
        name="lastname"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Telefono"
        name="phone"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Contraseña"
        name="password"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Mail"
        name="mail"
        onChange={handleChange}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={() => createUsers()}>
          Crear
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Editar Usuario</h3>
      <TextField
        className={styles.inputMaterial}
        label="name"
        name="name"
        value={user && user.name}
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="lastname"
        name="lastname"
        onChange={handleChange}
        value={user && user.lastname}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="phone"
        name="phone"
        onChange={handleChange}
        value={user && user.phone}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="password"
        name="password"
        onChange={handleChange}
        value={user && user.password}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="mail"
        name="mail"
        onChange={handleChange}
        value={user && user.mail}
      />
      <br />
      <br />
      <div align="right">
        <Button color="primary" onClick={peticionPut}>
          Editar
        </Button>
        <Button onClick={() => abrirCerrarModalEditar()}>Cancelar</Button>
      </div>
    </div>
  );

  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        ¿Estás seguro que deseas eliminar el usuario <b>{user && user.name}</b>?
      </p>
      <div align="right">
        <Button color="secondary" onClick={peticionDelete}>
          Sí
        </Button>
        <Button onClick={() => abrirCerrarModalEliminar()}>No</Button>
      </div>
    </div>
  );

  return (
    <Root>
      <br />
      <Button
        className="CrearUsuario"
        onClick={() => abrirCerrarModalInsertar()}
      >
        Crear Usuario
      </Button>
      <br />
      <br />
      <MaterialTable
        columns={columnas}
        data={data}
        title="Información de Usuarios"
        actions={[
          {
            icon: Edit,
            tooltip: "Editar Usuario",
            onClick: (e, rowData) => selectUser(rowData, "Editar"),
          },
          {
            icon: DeleteOutline,
            tooltip: "Editar Artista",
            onClick: (e, rowData) => selectUser(rowData, "Eliminar"),
          },
        ]}
        onRowClick={(evt, selectedRow) =>
          setSelectedRow(selectedRow.tableData.id)
        }
        options={{
          actionsColumnIndex: -1,
          rowStyle: (rowData) => ({
            backgroundColor:
              selectedRow === rowData.tableData.id ? "#fff" : "#e9ebed",
            fontFamily: "Be Vietnam Pro",
          }),
          headerStyle: {
            backgroundColor: "#81b214",
            color: "#FFF",
            fontFamily: "Be Vietnam Pro",
          },
          exportMenu: [
            {
              label: "Export PDF",
              exportFunc: (cols, datas) =>
                ExportPdf(cols, datas, "myPdfFileName"),
            },
            {
              label: "Export CSV",
              exportFunc: (cols, datas) =>
                ExportCsv(cols, datas, "myCsvFileName"),
            },
          ],
        }}
        localization={{
          header: {
            actions: "Acciones",
          },
        }}
      />
      <Modal open={modalInsertar} onClose={abrirCerrarModalInsertar}>
        {bodyInsertar}
      </Modal>

      <Modal open={modalEditar} onClose={abrirCerrarModalEditar}>
        {bodyEditar}
      </Modal>

      <Modal open={modalEliminar} onClose={abrirCerrarModalEditar}>
        {bodyEliminar}
      </Modal>
    </Root>
  );
}

export const Root = styled.div`
  width: 97%;
  margin-top: 30px;
  margin-left: 1.4%;

  .CrearUsuario {
    margin-left: 47%;
    padding-right: 1.5rem;
    background: #e9ebed;
    &:hover {
      color: white;
      background: #81b214;
    }
  }
  div {
    .MuiIconButton-root {
      &:hover {
        background-color: transparent;
      }
    h6 {
      font-family: "Be Vietnam Pro";
      color: #81b214;
      font-size: 20px;
    }
  }

  tbody,
  td,
  th {
    text-align: left;
    border: 1px solid #a8aaac;
    color: "#2a2d34";
    .MuiTableSortLabel-icon {
      color: grey;
      opacity: 1;
    }
  }
  svg {
    color: #81b214;
  }
`;

export default User;
