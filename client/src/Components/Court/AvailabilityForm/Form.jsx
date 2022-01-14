import React, { useState } from 'react'
import TimeField from 'react-simple-timefield'
import HoursList from './HoursList'
import DaysList from './DaysList'

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

    return (
        <div>
            <DaysList />
            <div>
                <p>Franja horaria:</p>
                <TimeField 
                        value={time.start} 
                        onChange={(e) => setTime({ ...time, start: e.target.value })}
                    />
                <TimeField 
                    value={time.end} 
                    onChange={(e) => setTime({ ...time, end: e.target.value })}
                />
                <button onClick={handleAddTime}>Añadir</button>
            </div> 
            { hours.length ? <HoursList hours={hours} setHours={setHours} /> : null }
        </div>
    )
}
