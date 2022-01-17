import React, { useState } from 'react'
import TimeField from 'react-simple-timefield'
import HoursList from './HoursList'
import DaysList from './DaysList'
import styled from 'styled-components'

export default function Form() {
    
    const [hours, setHours] = useState([])

    const [time, setTime] = useState({
        start: "",
        end: ""
    })

    const handleAddTime = (e) => {
        e.preventDefault()
        setHours([
            ...hours,
            time
        ])
        setTime({
            start: "",
            end: ""
        })
    }

    const tfObject = {
        height: "30px",
        width: "60px",
        fontSize: "14px",
        borderRadius: "20px",
        borderStyle: "none",
        textAlign: "center"
    }

    return (
        <Wrapper>
            <DaysList />
            <TimeAndHours>
                <TimeContainer>
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
    flex-direction: row;
    background: grey;
    height: 100%;
`

const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 35vw;
    align-items: center;
    background: blue;
`

const Button = styled.button`
    height: 30px;
    width: 50px;
    border-radius: 20px;
    border-style: none;
    margin-bottom: 8px;
`

const TimeAndHours = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`
const HoursContainer = styled.div`
    margin-top: 5vh;
`

const Title = styled.p`
    font-size: 20px;
`

const Fields = styled.div`
    margin-bottom: 8px;
`