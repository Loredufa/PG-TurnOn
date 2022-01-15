import React, { useContext } from 'react'
import { AvailabilityContext } from '../Context/AvailabilityContext'
import DayItem from './DayItem'

export default function DaysList() {

    const { week } = useContext(AvailabilityContext)

    return (
        <div>
            {
                week.map((day, i) => (
                    <DayItem key={i} day={day} />
                ))
            }
        </div>
    )
}
