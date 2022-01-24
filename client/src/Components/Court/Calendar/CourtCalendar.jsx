import React, { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import axios from 'axios'
import { parseDate } from './helpers/functions'

export default function CourtCalendar({ setBookings, currentCourt, date, setDate}) {

    useEffect(() => {
        console.log("ID/Date: ", currentCourt.id, parseDate(date.toLocaleDateString('es-ES')))
        axios.get(`/supplier/bookings/court?id=${currentCourt.id}&date=${parseDate(date.toLocaleDateString('es-ES'))}`) 
            .then(res => setBookings(res.data))
            .catch(err => console.log(err))
    }, [currentCourt, date])

    const handleChange = (date) => setDate(date)

    return (
        <Calendar
            onChange={handleChange}
            value={date}
        />
    )
}
