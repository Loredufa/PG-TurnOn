import React, { useContext } from 'react'
import CourtCalendar from './CourtCalendar'
import CourtAvailability from './CourtAvailability'
import { CourtContext } from '../Context/CourtContext'

export default function CalendarSection() {

    const { setSection } = useContext(CourtContext)

    return (
        <div>
            <button onClick={() => setSection("")}>Volver al listado</button>
            <CourtCalendar />
            <CourtAvailability />
        </div>
    )
}
