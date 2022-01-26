import React, { useState, useContext, useEffect } from 'react'
import CourtCalendar from './CourtCalendar'
import CourtAvailability from './CourtAvailability'
import { CourtContext } from '../Context/CourtContext'
import styled from 'styled-components'
import axios from 'axios'
import { parseDate } from './helpers/functions'

export default function CalendarSection() {

    const { setSection, currentCourt } = useContext(CourtContext)

    const [bookings, setBookings] = useState([])
    const [date, setDate] = useState(new Date())
    console.log("DATE: ", date)

    /* useEffect(() => {
        axios.get(`/supplier/bookings/court?id=${currentCourt.id}&date=${parseDate(date.toLocaleDateString())}`) 
            .then(res => {
                setBookings(res.data)
            })
            .catch(err => console.log(err))
    }, []) */

    return (
        <Wrapper>
            <ButtonContainer>
                <Button onClick={() => setSection("")}>Volver a la lista de canchas</Button>
            </ButtonContainer>
            <Container>
                <CourtCalendar date={date} setDate={setDate} currentCourt={currentCourt} setBookings={setBookings} />
                <CourtAvailability date={date} bookings={bookings} setBookings={setBookings}/>
            </Container>
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background: #e9ebed;
    height: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 85%;
    @media (max-width: 1025px) {
        flex-direction: column;
        height: auto;
        align-items: center;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
    
`

const Button = styled.button`
    width: 200px;
    margin-left: 10px;
    background-color: #81b214;
    color: white;
    border-style: none;
    border-radius: 30px;
    height: 45px;
    font-size: 16px;
    &:hover {
        background-color: white;
        color: #81b214;
`