import React from 'react'
import TableBookings from './History/TableBookings'
import styled from "styled-components"


export default function History() {
    return (
        <div>
            <Title>Historial de Reservas</Title>
            <TableBookings/>
        </div>
    )
}

export const Title = styled.h1`
color: #81b214;
margin-left: 2%;
font-size: 300%`