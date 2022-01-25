import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import MaterialTable from '@material-table/core';
import { ExportCsv, ExportPdf } from '@material-table/exporters';
import axios from 'axios';
import styled from "styled-components"


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

})) */

const columns =[
    { title:"Id", field:"id", type: "numeric"},
    { title:"Fecha", field:"date"},
    { title:"Día", field:"day"},
    { title:"Cancha", field:"courtId"},
    { title:"Hora inicio", field:"initialTime"},
    { title:"Hora finalización", field:"endingTime"},
    { title:"Nombre", field: "user.name"},
    { title:"Apellido", field: "user.lastname"},
    { title:"Teléfono", field: "user.phone"},
    { title:"Precio", field: "payments.price"},
    { title:"Estado Seña", field: "payments.payment_status"},
    { title:"Seña", field: "payments.amount"},
    { title:"Estado Reserva", field:"status"},
    { title:"Codigo Reserva", field:"bookingCode"}
]


export default function TableBookings (){
    const {supplier} = useSelector(state => state.user);
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get(`/supplier/bookings?supplierId=${supplier.id}`)
            .then(res => setInfo(res.data))
            .catch(error => {console.log(error)})
            /* console.log("QUE TRAE", info) */
            console.log("QUE Suplier.id", supplier.id)
    }, [supplier.id])


 
    return(
        <Root>
            <br/>
            <MaterialTable
                columns={columns}
                data={info.allbookings}
                title="Movimientos"
                options={{ actionsColumnIndex: -1,
                    headerStyle: {
                        backgroundColor: '#81b214',
                        color: '#FFF',
                        fontFamily: 'Be Vietnam Pro',
                        textAlign: 'left',
                        border: '1px solid white',

                      },
                      rowStyle: {
                        backgroundColor: '#e9ebed',
                        textAlign: 'left',
                        color: '#2a2d34',
                        fontFamily: 'Be Vietnam Pro',
                      },exportMenu: [{
                        label: 'Export PDF',
                        exportFunc: (cols, datas) => ExportPdf(cols, datas, 'myPdfFileName')
                      }, {
                        label: 'Export CSV',
                        exportFunc: (cols, datas) => ExportCsv(cols, datas, 'myCsvFileName')
                      }]
                       }}
            
            />
        </Root>
    )
}

export const Root = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  table {
  }

  td,
  th {
    border: 1px solid #a8aaac;
    color: '#2a2d34';
  }
  svg {
    color: #81b214;
  }`