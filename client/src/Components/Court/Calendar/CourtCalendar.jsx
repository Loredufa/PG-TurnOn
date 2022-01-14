import React, { useEffect, useState, useContext } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { CourtContext } from '../Context/CourtContext';

export default function CourtCalendar() {

    const [date, setDate] = useState(new Date())

    const { currentCourt } = useContext(CourtContext)

    useEffect(() => {
        // axios
        console.log("ID/Date: ", currentCourt.id, date.toLocaleDateString())
    }, [currentCourt, date])

    const handleChange = (date) => setDate(date)

    return (
        <div>
            <Calendar
                onChange={handleChange}
                value={date}
            />
            <p>Fecha: {date.toLocaleDateString()}</p>
            <p>ID de cancha: {currentCourt.id}</p>
        </div>
    )
}
