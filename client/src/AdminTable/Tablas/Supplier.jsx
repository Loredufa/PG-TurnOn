import { Button, Modal, TextField } from "@material-ui/core";
import { DeleteOutline, Edit } from "@material-ui/icons";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import React, { useEffect, useState } from "react";

import MaterialTable from "@material-table/core";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const columnas = [
  { title: "Id", field: "id", type: "numeric" },
  { title: "Nombre", field: "name" },
  { title: "Mail", field: "mail" },
  { title: "Contraseña", field: "password" },
  { title: "Cuit", field: "cuit" },
  { title: "Razón Social", field: "businessname" },
  { title: "Telefono", field: "phone" },
  { title: "Dirección", field: "address" },
  { title: "Coordenadas", field: "coordinates" },
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

function Supplier() {
  useEffect(() => {
    allSuppliers();
  }, []);

  const [data, setData] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalEditar, setModalEditar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [supplierSelected, setSupplierSelected] = useState({
    id: "",
    name: "",
    mail: "",
    password: "",
    cuit: "",
    businessname: "",
    phone: "",
    address: "",
    access: "",
    coordinates: "",
  });
  const styles = useStyles();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSupplierSelected({
      ...supplierSelected,
      [name]: value,
    });
  };

  const abrirCerrarModalInsertar = () => {
    setModalInsertar(!modalInsertar);
  };

  const abrirCerrarModalEditar = () => {
    setModalEditar(!modalEditar);
  };

  const abrirCerrarModalEliminar = () => {
    setModalEliminar(!modalEliminar);
  };

  const allSuppliers = async () => {
    await axios.get("/supplier/suppliers").then((response) => {
      setData(response.data);
      console.log(response.data);
    });
  };

  const peticionPost = async () => {
    await axios
      .post("/supplier/supplier", supplierSelected)
      .then(() => {
        axios
          .get("/supplier/suppliers")
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
    abrirCerrarModalInsertar();
  };

  const peticionPut = async () => {
    await axios
      .put(`/supplier/supplier/${supplierSelected.id}`, supplierSelected)
      .then(() => {
        axios
          .get("supplier/suppliers")
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
      .delete(`/supplier/supplier/${supplierSelected.id}`)
      .then((response) => {
        setData(data.filter((supplier) => supplier.id !== supplierSelected.id));
        abrirCerrarModalEliminar();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const selectSupplier = (supplier, caso) => {
    setSupplierSelected(supplier);
    if (caso === "Editar") abrirCerrarModalEditar();
    if (caso === "Eliminar") abrirCerrarModalEliminar();
  };

  //MOdal de Insertar
  const bodyInsertar = (
    <div className={styles.modal}>
      <h3>Crear Nuevo Proveedor</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre"
        name="name"
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
      <TextField
        className={styles.inputMaterial}
        label="Contraseña"
        name="password"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Cuit"
        name="cuit"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Razon Social"
        name="businessname"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Teléfono"
        name="phone"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Direccion"
        name="address"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Coordenadas"
        name="coordinates"
        onChange={handleChange}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Acceso"
        name="access"
        onChange={handleChange}
      />
      <br />

      <br />
      <div align="right">
        <Button color="primary" onClick={() => peticionPost()}>
          Crear
        </Button>
        <Button onClick={() => abrirCerrarModalInsertar()}>Cancelar</Button>
      </div>
    </div>
  );

  // MOdal de Editar
  const bodyEditar = (
    <div className={styles.modal}>
      <h3>Modificar datos del Proveedor</h3>
      <TextField
        className={styles.inputMaterial}
        label="Nombre"
        name="name"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.name}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Mail"
        name="mail"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.mail}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Contraseña"
        name="password"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.password}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Cuit"
        name="cuit"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.cuit}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Razon Social"
        name="businessname"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.businessname}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Teléfono"
        name="phone"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.phone}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Direccion"
        name="address"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.address}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Coordenadas"
        name="coordinates"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.coordinates}
      />
      <br />
      <TextField
        className={styles.inputMaterial}
        label="Acceso"
        name="access"
        onChange={handleChange}
        value={supplierSelected && supplierSelected.access}
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

  //Modal de Eliminar
  const bodyEliminar = (
    <div className={styles.modal}>
      <p>
        ¿Estás seguro que deseas eliminar el proveedor<b> </b>
        <b>{supplierSelected && supplierSelected.name}</b>?
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
        className="CrearSupplier"
        onClick={() => abrirCerrarModalInsertar()}
      >
        Crear Proveedor
      </Button>
      <br />
      <br />
      <MaterialTable
        columns={columnas}
        data={data}
        title="Información de proveedores"
        actions={[
          {
            icon: Edit,
            tooltip: "Editar usuario",
            onClick: (event, rowData) => selectSupplier(rowData, "Editar"),
          },
          {
            icon: DeleteOutline,
            tooltip: "Eliminar usuario",
            onClick: (event, rowData) => selectSupplier(rowData, "Eliminar"),
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

      <Modal open={modalEliminar} onClose={abrirCerrarModalEliminar}>
        {bodyEliminar}
      </Modal>
    </Root>
  );
}

export const Root = styled.div`
  width: 97%;
  margin-top: 30px;
  margin-left: 1.4%;
  overflow: hidden;
  white-space: nowrap;
  .CrearSupplier {
    margin-left: 47%;
    padding-right: 1.5rem;
    background: #e9ebed;
    &:hover {
      color: white;
      background: #81b214;
    }
  }
  div {
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
  }
  svg {
    color: #81b214;
  }
`;

export default Supplier;
