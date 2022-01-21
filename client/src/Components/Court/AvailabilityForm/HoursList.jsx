import React, { useContext } from 'react'
import styled from 'styled-components'
import { AvailabilityContext } from '../Context/AvailabilityContext'
import { CourtContext } from '../Context/CourtContext'
import HourItem from './HourItem'
import axios from 'axios'
import { verifyHours, splitHours } from './helpers/functions'
import { orderAvailability } from '../Context/helpers/functions'

export default function HoursList({ hours, setHours }) {

    const { days, setDays, setAvailability, availability } = useContext(AvailabilityContext)
    const { currentCourt } = useContext(CourtContext)

    const handleClick = () => {
        let verify = verifyHours(availability, days, hours)
        if (!days.length) {
            alert("Debes seleccionar al menos un día de la semana")
        }
        else if (!hours.length) {
            alert("Debes configurar una franja horaria")
        }
        else if (verify.isIncorrect) {
            alert(verify.message)
        }
        else {
            axios.post(`/supplier/available/${currentCourt.id}`, { days, hours: splitHours(hours) })
                .then(res => {
                    axios.get(`/supplier/available/court/${currentCourt.id}`)
                    .then(res => setAvailability(orderAvailability(res.data)))
                    .catch(err => console.log(err))
                })
                .catch(err => console.log(err))
            console.log({ days, hours })
            setDays([])
            setHours([])
        }
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
                <HourItem 
                    key={i} 
                    hours={hours}
                    setHours={setHours}
                    start={h.start} 
                    end={h.end}
                />
            ))
        }
        <Button onClick={handleClick}>GUARDAR</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #e9ebed;
    
`
const DaysList = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
const Day = styled.p`
    margin: 7px;
`
const Button = styled.button`
    border-radius: 20px;
    height: 41px;
    width:140px;
    border-style: none;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;
    background: #81b214;
    color: white;
    margin-top:10px;
    &:hover{
        background-color:white;
        color:#81b214;}
    
`