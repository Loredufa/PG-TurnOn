import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { parseDate } from './helpers/functions'
import styled from 'styled-components'

export default function CourtCalendar({ setBookings, currentCourt, date, setDate}) {

    useEffect(() => {
        axios.get(`/supplier/bookings/court?id=${currentCourt.id}&date=${parseDate(date.toLocaleDateString('es-ES'))}`) 
            .then(res => setBookings(res.data))
            .catch(err => console.log(err))
    }, [currentCourt, date])

    const handleChange = (date) => setDate(date)

    return (
        <Wrapper>
            <Title>{currentCourt.name}</Title>
            <Calendar
                onChange={handleChange}
                value={date}
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    width: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1025px) {
        width: 100%;
        margin-bottom: 20px;
    }
`
const Title = styled.span`
    font-size: 40px;
    font-weight: 700;
    color: #81b214;
    margin-bottom: 10px;
`