import React, {useContext} from "react"
import styled from 'styled-components'
import { CourtContext } from "../Context/CourtContext"
import axios from "axios";
import Swal from 'sweetalert2'


export default function BookingItem ({ date, start, end, status, setBookings, id }) {
    const { currentCourt } = useContext(CourtContext)

    const states = {
        completed: "Completada",
        cancelled: "Cancelada",
        voucher: "Voucher",
        active: "Activa"
    }

    const handleCompleted = () => {
        Swal.fire({
            title: 'Solicitar valoración?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'SI',
            denyButtonText: `NO`,
        })
        .then((result) => {
            let rating
            if (result.isConfirmed) {   
            rating = "true"
            } else if (result.isDenied) {
                rating = "false"
            }
            if(rating) {
                axios.put(`/supplier/bookings/${id}?status=completed&rating=${rating}`) // cambia de estado la reserva
                .then(() => {
                    axios.get(`/bookings/court?id=${currentCourt.id}&date=${date}`) // pide la lista actualizada
                    .then(res => setBookings(res.data))
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err)) 
            }
        })
        .catch(err => console.log(err))
     }
    // /supplier/bookings/:id?status=cancelled&rating=true

    const handleCancelled = () => {
        axios.put(`/supplier/bookings/${id}?status=voucher&rating=false`) // cambia de estado la reserva
        .then(() => {
         axios.get(`/bookings/court?id=${currentCourt.id}&date=${date}`) // pide la lista actualizada
         .then(res => setBookings(res.data))
         .catch(err => console.log(err))
         })
         .catch(err => console.log(err)) 
        }



    return (
        <Wrapper>
            <InfoContainer>
                <span><strong>Fecha:</strong> {date}</span><br/>
                <span><strong>Hora de inicio:</strong> {start}</span><br/>
                <span><strong>Hora de finalización:</strong> {end}</span><br/>
                <span><strong>Estado:</strong> {states[status]}</span>
            </InfoContainer>
            <ButtonsContainer>
                {
                    status === "active" ?
                    <>
                    <ButtonCancel onClick={handleCancelled}>Cancelar</ButtonCancel>
                    <ButtonComplete onClick={handleCompleted}>Completar</ButtonComplete> 
                    </> : null
                }
            </ButtonsContainer>
        </Wrapper>
    )
    
}

const Wrapper = styled.div`
    font-family: 'Be Vietnam Pro', sans-serif;
    text-align: center;
    background: #2a2d34;
    color: white;
    border-radius: 20px;
    padding: 10px;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 3px;
    @media (max-width: 650px) {
        width: 70%;
    }
`

const ButtonComplete = styled.button`
    height: 35px;
    width: 100px;
    border-radius: 30px;
    border-style: none;
    background: #179f34;
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    margin: 5px;
    &:hover {
        background: #116913;
    }
`
const ButtonCancel = styled.button`
    height: 35px;
    width: 100px;
    border-radius: 30px;
    border-style: none;
    background: red;
    color: white;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    margin: 5px;
    &:hover {
        background: darkred;
    }
`

const InfoContainer = styled.div`

`

const ButtonsContainer = styled.div`
    margin-top: 5px;
`