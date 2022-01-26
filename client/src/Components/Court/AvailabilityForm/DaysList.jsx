import React, { useContext } from 'react'
import { AvailabilityContext } from '../Context/AvailabilityContext'
import DayItem from './DayItem'
import styled from 'styled-components'

export default function DaysList() {

    const { week } = useContext(AvailabilityContext)

    return (
        <DaysContainer>
            {
                week.map((day, i) => (
                    <DayItem key={i} day={day} />
                ))
            }
        </DaysContainer>
    )
}

const DaysContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background: white;
    padding: 20px;
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    
`