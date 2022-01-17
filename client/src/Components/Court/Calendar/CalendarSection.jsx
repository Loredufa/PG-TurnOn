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
            <Button onClick={() => setSection("")}>Volver al listado</Button>
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
`

const Button = styled.button`

`