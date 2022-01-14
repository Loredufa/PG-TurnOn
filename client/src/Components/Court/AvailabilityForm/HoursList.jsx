import React, { useContext } from 'react'
import styled from 'styled-components'
import { AvailabilityContext } from '../Context/AvailabilityContext'
import HourItem from './HourItem'

export default function HoursList({ hours, setHours }) {

    const { days, setDays } = useContext(AvailabilityContext)

    const handleClick = () => {
        // axios.post("http://localhost:3001/supplier/available/:idCourt???", { days: group, hours  })
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