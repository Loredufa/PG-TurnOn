import React, { useContext } from 'react'
import { AvailabilityContext } from "../Context/AvailabilityContext"
import styled from 'styled-components'

export default function DayItem({ day }) {

    const { days, setDays } = useContext(AvailabilityContext)

    const handleClick = (e) => {
        e.preventDefault()
        if(!days.includes(e.target.value)) {
            setDays([
                ...days,
                e.target.value
            ])
        }
        else {
            let filtered = days.filter(x => x !== e.target.value)
            console.log(filtered)
            setDays(filtered)
        }
    }

    return (
        <button 
            style={
                days.includes(day) ? 
                { background: "black", color: "white" } : {}
            }
            value={day} 
            onClick={handleClick}
        >
            {day}   
        </button>
    )
}

const DayButton = styled.div`

`
