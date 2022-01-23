import React, {useContext} from "react"
import styled from 'styled-components'
import { CourtContext } from "../Context/CourtContext"
import axios from "axios";
import Swal from 'sweetalert2'


export default function BookingItem ({ date, start, end, status, setBookings, id }) {
    const { currentCourt } = useContext(CourtContext)

    const handleCompleted = () => {
        Swal.fire({
            title: 'Solicitar valoración?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
          }).then((result) => {
            let rating
            if (result.isConfirmed) {   
              rating = "true"
            } else if (result.isDenied) {
                rating = "false"
            } console.log(rating)
            axios.put(`/supplier/bookings/${id}?status=completed&rating=${rating}`) // cambia de estado la reserva
            .then(() => {
             axios.get(`/bookings/court?id=${currentCourt.id}&date=${date}`) // pide la lista actualizada
             .then(res => setBookings(res.data))
             .catch(err => console.log(err))
             })
             .catch(err => console.log(err)) 
          })
     }
    // /supplier/bookings/:id?status=cancelled&rating=true

    const handleCancelled = () => {
        axios.put(`/supplier/bookings/${id}?status=cancelled&rating=false`) // cambia de estado la reserva
        .then(() => {
         axios.get(`/bookings/court?id=${currentCourt.id}&date=${date}`) // pide la lista actualizada
         .then(res => setBookings(res.data))
         .catch(err => console.log(err))
         })
         .catch(err => console.log(err)) 
        }



    return (
        <Wrapper>
            <span>Fecha: {date}</span><br/>
            <span>Hora de inicio: {start}</span><br/>
            <span>Hora de finalización: {end}</span><br/>
            <span>Estado: {status}</span>
            <div>
                {<button onClick={handleCancelled} value = "canceled" >Cancelar</button> }
                {<button onClick={handleCompleted} value = "active" >Completada</button> } 
            </div>
        </Wrapper>
    )
    
}

const Wrapper = styled.div`
`

