import { ExportCsv, ExportPdf } from "@material-table/exporters";
import React, { useEffect, useState } from "react";

import MaterialTable from "@material-table/core";
import axios from "axios";
import styled from "styled-components";
import { useSelector } from "react-redux";

/* const useStyles = makeStyles ((theme) => ({
    modal:{
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShador: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
    },
    iconos:{
        cursor: 'pointer'
    },
    inputMaterial:{
        width: '100%'
    }

})) 




*/

const columns = [
  /* { title: "Id", field: "id", type: "numeric" }, */
  { title: "Cancha", field: "nombreCancha" },
  { title: "Fecha", field: "date" },
  { title: "Día", field: "day" },
  { title: "Hora inicio", field: "initialTime" },
  { title: "Hora finalización", field: "endingTime" },
  { title: "Nombre", field: "user.name" },
  { title: "Apellido", field: "user.lastname" },
  { title: "Teléfono", field: "user.phone" },
  { title: "Precio", field: "payment.price" },
  { title: "Estado Seña", field: "payment.payment_status" },
  { title: "Seña", field: "payment.amount" },
  { title: "Estado Reserva", field: "status" },
  { title: "Codigo Reserva", field: "bookingCode" },
];

export default function TableBookings() {
  const { supplier } = useSelector((state) => state.user);
  const [info, setInfo] = useState([]);

  useEffect(async () => {
    let newArray = [];
    for (let i = 0 ; i<info.allbookings.length ; i++) {
        const court = await axios.get(`/supplier/court/detail/${info.allbookings[i].courtId}`)
        newArray [i] = {...info.allbookings[i] ,  nombreCancha:court.data.name}
    }
    setInfo(newArray);
}, [info.allbookings])

  useEffect(() => {
    axios
      .get(`/supplier/bookings?supplierId=${supplier.id}`)
      .then((res) => {
        res.data.allbookings.map((e) =>
          e.payment ? (e.payment.price = e.payment.amount * 10) : e.payment
        );
        setInfo(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    /* console.log("QUE TRAE", info) */
    console.log("QUE Suplier.id", info);
  }, [supplier.id]);
  // let info2 = info.allbookings.map(
  //   (e) => (e.payment.price = e.payment.amount * 10)
  // );
  return (
    <Root>
      <br />
      <MaterialTable
        columns={columns}
        data={info}        
        title="Movimientos"
        options={{
          actionsColumnIndex: -1,
          headerStyle: {
            backgroundColor: "#81b214",
            color: "#FFF",
            fontFamily: "Be Vietnam Pro",
            textAlign: "left",
            border: "1px solid #daebfd",
          },
          rowStyle: {
            backgroundColor: "#e9ebed",
            textAlign: "left",
            color: "#2a2d34",
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
      />
    </Root>
  );
}

export const Root = styled.div`
  margin-left: 1.4rem;
  margin-right: 1.4rem;
  div {
    .MuiIconButton-root {
      &:hover {
        background-color: transparent;
      }
  }
  td {
    text-align: center;
    border: 1px solid #a8aaac;
    color: "#2a2d34";
  }
  th {
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
