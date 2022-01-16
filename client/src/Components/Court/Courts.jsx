import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import CourtList from './CourtList'
import CalendarSection from './Calendar/CalendarSection'
import { AvailabilityProvider } from './Context/AvailabilityContext'
import styled from 'styled-components'

export default function Courts() {
    
    const { section } = useContext(CourtContext)

    return (
        <SectionContainer>
            { section === "" && <CourtList /> }
            { section === "calendar" && <CalendarSection /> }
            { section === "availability" && <AvailabilityProvider /> }
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    background: #e9ebed;
    height: 88.5vh;
`