import React from 'react'
import styled from 'styled-components'
import BookingItem from './BookingItem'

export default function CourtAvailability({ bookings, setBookings, date }) {
    
    return (
        <Wrapper>
            <Title>Reservas:</Title>
        {
            bookings.length ?
            <div>
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
            </div>
            :
            <div>
                No hay turnos para el día seleccionado...
            </div>
        }
        </Wrapper>
    )
}


const Wrapper = styled.div`
`

const Title = styled.h2`
    font-size: 30px;
`