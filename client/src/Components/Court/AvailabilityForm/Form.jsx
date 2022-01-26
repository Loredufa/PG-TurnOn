import React, { useState } from 'react'
import TimeField from 'react-simple-timefield'
import HoursList from './HoursList'
import DaysList from './DaysList'
import styled from 'styled-components'
import { orderHours } from './helpers/functions'
import Swal from 'sweetalert2'

export default function Form() {
    
    const [hours, setHours] = useState([])

    const [time, setTime] = useState({
        start: "",
        end: ""
    })

    const handleAddTime = (e) => {
        e.preventDefault()
        if(time.start === time.end || time.start.slice(3) !== time.end.slice(3) || Number(time.start.slice(0, 2)) >= Number(time.end.slice(0, 2))) {
            Swal.fire({
                title: 'Error!',
                text: 'Datos incorrectos.',
            })
        }
        else {
            if(time.start && time.end) {
                let array = orderHours([...hours, time])
                setHours(array)
                setTime({
                    start: "",
                    end: ""
                })
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Datos incompletos.',
                })
            }
        }
    }

    const tfObject = {
        height: "30px",
        width: "60px",
        fontSize: "14px",
        borderRadius: "20px",
        borderStyle: "none",
        textAlign: "center",
        marginRight: "5px",
        marginLeft: "5px"
    }

    return (
        <Wrapper>
            <TimeAndHours>
                <TimeContainer>
                    <DaysList />
                    <Title>Franja horaria:</Title>
                    <Fields>
                        <TimeField
                            style={tfObject}
                            value={time.start} 
                            onChange={(e) => setTime({ ...time, start: e.target.value })}
                        />
                        <TimeField
                            style={tfObject}
                            value={time.end} 
                            onChange={(e) => setTime({ ...time, end: e.target.value })}
                        />
                    </Fields>
                    <Button onClick={handleAddTime}>Añadir</Button>
                </TimeContainer>
                <HoursContainer>
                    { hours.length ? <HoursList hours={hours} setHours={setHours} /> : null }
                </HoursContainer>
            </TimeAndHours>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    background: #e9ebed;
    height: auto;
`

const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    align-items: center;
    background: #e9ebed;
    @media (max-width: 951px) {
        width: 100vw;
    }
`

const Button = styled.button`
    height: 41px;
    width:100px;
    border-radius: 20px;
    border-style: none;
    margin-bottom: 8px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;
    background: #81b214;
    color: white;
    margin-top:10px;
    &:hover{
        background-color:white;
        color:#81b214;}
`

const TimeAndHours = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-evenly; */
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 16px;
    width: 100%;
    /* @media (max-width: 951px) {
        flex-direction: column;
    } */
`
const HoursContainer = styled.div`
    margin-top: 4vh;
    width: 50vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    @media (max-width: 951px) {
        width: 100vw;
    }
`

const Title = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #81b214;
`

const Fields = styled.div`
    margin-bottom: 8px;
    display:flex;
    flex-direction: row;
    
`