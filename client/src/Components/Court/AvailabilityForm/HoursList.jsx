import React, { useContext } from 'react'
import styled from 'styled-components'
import { AvailabilityContext } from '../Context/AvailabilityContext'
import { CourtContext } from '../Context/CourtContext'
import HourItem from './HourItem'
import axios from 'axios'

export default function HoursList({ hours, setHours }) {

    const { days, setDays, setAvailability } = useContext(AvailabilityContext)
    const { currentCourt } = useContext(CourtContext)

    const handleClick = () => {
        axios.post(`http://localhost:3001/supplier/available/${currentCourt.id}`, { days, hours })
            .then(res => {
                axios.get(`http://localhost:3001/supplier/available/court/${currentCourt.id}`)
                .then(res => setAvailability(res.data))
                .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
        console.log({ days, hours })
        setDays([])
        setHours([])
    }

    return (
        <Wrapper>
            <DaysList>
                {
                    days.map(day => <Day>{day}</Day>)
                }
            </DaysList>
        {
            hours.map((h, i) => (
                <HourItem key={i} start={h.start} end={h.end} />
            ))
        }
        <button onClick={handleClick}>GUARDAR</button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    
`

const DaysList = styled.div`
    display: flex;
    flex-direction: row;
`
const Day = styled.p`
    margin: 3px;
`