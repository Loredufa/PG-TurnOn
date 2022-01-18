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
        <Button
            style={
                days.includes(day) ? 
                { background: "#81b214", color: "white" } : {}
            }
            value={day} 
            onClick={handleClick}
        >
            {day}   
        </Button>
    )
}

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

const Button = styled.button`
    height: 45px;
    width: 100px;
    border-radius: 30px;
    border-style: none;
    background: #e9ebed;
    color: #81b214;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 14px;
    margin: 5px;
`
