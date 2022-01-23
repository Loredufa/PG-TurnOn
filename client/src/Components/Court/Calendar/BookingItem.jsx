import React from "react"
import styled from 'styled-components'

export default function BookingItem ({ date, start, end, status, setBookings }) {

    const handleComplete = () => {
        /* axios.put("/supplier/booking/status/") // cambia de estado la reserva
            .then(() => {
                axios.get("ruta que trae reservas") // pide la lista actualizada
                    .then(res => setBookings(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err)) */
    }



    return (
        <Wrapper>
            <span>Fecha: {date}</span><br/>
            <span>Hora de inicio: {start}</span><br/>
            <span>Hora de finalización: {end}</span><br/>
            <span>Estado: {status}</span>
            <div>
                {/* <button onClick={handleComplete}>MARCAR COMO COMPLETADA</button> */}
            </div>
        </Wrapper>
    )
    
}

const Wrapper = styled.div`

`