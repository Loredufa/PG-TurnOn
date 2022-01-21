import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import MaterialTable from 'material-table';
/* import { makeStyles, ThemeProvider } from '@material-ui/core'; */
/* import { Modal, TextField, Button } from '@material-ui/core'; */
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

const useStyles = makeStyles ((theme) => ({
    modal:{
        position: "absolute",
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShador: theme.shadows[5],
        padding: theme.spacing(2,4,3),
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

const columns =[
    { title:"Numero", field:"id", type: "numeric"},
    { title:"Fecha", field:"date"},
    { title:"Id Cancha", field:"courtId"},
    { title:"Hora de inicio", field:"initialTime"},
    { title:"Hora de finalización", field:"endingTime"},
    { title:"Nombre y Apellido", field: "user"},
    { title:"Teléfono", field: "user.phone"},
    { title:"Estado", field:"status"},
    { title:"Codigo de Reserva", field:"bookingCode"}
]


export default function TableBookings (){
    const styles = useStyles();
    const supplierId = useSelector((e) => e.user.supplier.id);
    const [info, setInfo] = useState([]);

    const getBokking = async ()=>{
        await axios.get(`/supplier/bookings?supplierId=${supplierId}`)
        .then(response => {setInfo(response.data)})
        .catch (error => { console.log(error)})
    }

    useEffect (() => {
        getBokking()
    }, [])
   
    
 
    return(
        <div>
            <MaterialTable
                columns={columns}
                data={info}
                title="Historial de Reservas"
                actions={[
                    { icon: "edit", tooltip: "Editar Estado"},
                    { icon: "delete", tooltip: "Eliminar reserva"}
                ]}
                options={{ actionsColumnIndex: -1}}
                localization={{ header:{ actions:"Acciones"}}}
            
            />

        </div>
    )
}