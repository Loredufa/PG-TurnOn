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
        height: "20px",
        fontSize: "14px",
        borderRadius: "20px",
        borderStyle: "none"
    }

    return (
        <Wrapper>
            <DaysList />
            <TimeContainer>
                <p>Franja horaria:</p>
                <div>
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
                </div>
                <Button onClick={handleAddTime}>Añadir</Button>
            </TimeContainer>
            <div>
                { hours.length ? <HoursList hours={hours} setHours={setHours} /> : null }
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
`

const TimeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    height: 23px;
    border-radius: 20px;
    border-style: none;
`