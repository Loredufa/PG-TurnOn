import React from 'react'
import styled from 'styled-components'
import BookingItem from './BookingItem'

export default function CourtAvailability({ bookings, setBookings, date }) {
    
    console.log(bookings)

    return (
        <Wrapper>
            <Title>Reservas:</Title>
        {
            bookings.length ?
            <ItemsContainer>
                {
                    bookings.map(b => (
                        <BookingItem key={b.id}
                            date={date}
                            id={b.id}
                            date={b.date} 
                            start={b.initialTime} 
                            end={b.endingTime}
                            status={b.status}
                            setBookings={setBookings}
                        />
                    ))
                }
            </ItemsContainer>
            :
            <Message>
                <h3>No hay turnos para el día seleccionado...</h3>
            </Message>
        }
        </Wrapper>
    )
}


const Wrapper = styled.div`
    background: white;
    height: 100%;
    width: 50vw;
    align-content: center;
    border-radius: 10px;
    @media (max-width: 1025px) {
        width: 80%;
    }
`
const Message = styled.div`
    height: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.span`
    font-size: 30px;
    font-weight: 700;
    color: #81b214;
    margin-bottom: 3px;
`

const ItemsContainer = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: scroll;
`

/* :root {
    --colorGrey: #e9ebed;
    --colorBlack: #2a2d34;
    --colorAppleGreen: #81b214;
    --colorPastelGreen: #3fc959;
    --colorSlimeGreen: #179f34;
    --colorPakistanGreen: #116913;
    --colorForestGreen: #0b4619;
    --colorMikatoYellow: #ffc900;
    --colorCornSlik: #f8f1d9;
} */