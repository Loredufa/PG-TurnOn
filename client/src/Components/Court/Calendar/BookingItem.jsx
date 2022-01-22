import React from "react"
import styled from 'styled-components'

export default function BookingItem ({ date, start, end, status }) {
    return (
        <Wrapper>
            <span>Fecha: {date}</span><br/>
            <span>Hora de inicio: {start}</span><br/>
            <span>Hora de finalización: {end}</span><br/>
            <span>Estado: {status}</span>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`