import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import CourtList from './CourtList'
import CalendarSection from './Calendar/CalendarSection'
import { AvailabilityProvider } from './Context/AvailabilityContext'

export default function Courts() {
    
    const { section } = useContext(CourtContext)

    return (
        <div>
            { section === "" && <CourtList /> }
            { section === "calendar" && <CalendarSection /> }
            { section === "availability" && <AvailabilityProvider /> }
        </div>
    )
}

