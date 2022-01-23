import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import MaterialTable from '@material-table/core';
import axios from 'axios';


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
    { title:"Hora de inicio", field:"initialTime"},
    { title:"Hora de finalización", field:"endingTime"},
    { title:"Nombre", field: "user.name"},
    { title:"Apellido", field: "user.lastname"},
    { title:"Teléfono", field: "user.phone"},
    { title:"Estado", field:"status"},
    { title:"Codigo de Reserva", field:"bookingCode"}
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
        <div>
            <br/>
            <MaterialTable
                columns={columns}
                data={info.allbookings}
                title="Historial de Reservas"
                options={{ actionsColumnIndex: -1}}
                localization={{ header:{ actions:"Acciones"}}}
            
            />
        </div>
    )
}