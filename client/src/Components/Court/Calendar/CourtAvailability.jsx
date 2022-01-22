import React from 'react'
import styled from 'styled-components'
import BookingItem from './BookingItem'

export default function CourtAvailability({ bookings }) {
    console.log(bookings)
    return (
        <Wrapper>
        {
            bookings.length ?
            <div>
                {
                    bookings.map(b => (
                        <BookingItem 
                            date={b.date} 
                            start={b.initialTime} 
                            end={b.endingTime}
                            status={b.status}
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