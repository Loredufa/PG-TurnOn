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
        axios.post(`/supplier/available/${currentCourt.id}`, { days, hours })
            .then(res => {
                axios.get(`/supplier/available/court/${currentCourt.id}`)
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
        <Button onClick={handleClick}>GUARDAR</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: grey;
`
const DaysList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Day = styled.p`
    margin: 3px;
`
const Button = styled.button`
    border-radius: 20px;
    height: 30px;
    border-style: none;
`