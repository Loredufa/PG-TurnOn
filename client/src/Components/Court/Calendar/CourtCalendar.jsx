import React, { useEffect, useState, useContext } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import { CourtContext } from '../Context/CourtContext';

export default function CourtCalendar({ setBookings }) {

    const [date, setDate] = useState(new Date())

    const { currentCourt } = useContext(CourtContext)

    useEffect(() => {
        console.log("ID/Date: ", currentCourt.id, date.toLocaleDateString())
        // axios.get(".../booking") me trae las reservas de un día determinado
        //      .then(res => setBookings(res.data))
        //      .catch(err => console.log(err))
    }, [currentCourt, date])

    const handleChange = (date) => setDate(date)

    return (
        <Calendar
            onChange={handleChange}
            value={date}
        />
    )
}
