import React, { useState, useContext } from 'react'
import CourtCalendar from './CourtCalendar'
import CourtAvailability from './CourtAvailability'
import { CourtContext } from '../Context/CourtContext'
import styled from 'styled-components'

export default function CalendarSection() {

    const { setSection } = useContext(CourtContext)

    const [bookings, setBookings] = useState([])

    return (
        <Wrapper>
            <ButtonContainer>
                <Button onClick={() => setSection("")}>Volver a la lista de canchas</Button>
            </ButtonContainer>
            <Container>
                <CourtCalendar setBookings={setBookings} />
                <CourtAvailability bookings={bookings} />
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
    background: #2a2d34;
    color: white;
    border-style: none;
    border-radius: 20px;
    height: 30px;
`