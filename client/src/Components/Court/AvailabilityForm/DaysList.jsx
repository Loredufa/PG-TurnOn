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
    flex-direction: column;
    background: white;
    padding-top:20px;
    padding-right: 10px;
    padding-left: 25px;
    border-radius: 10px;
    
`