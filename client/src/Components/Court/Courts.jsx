import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import CourtList from './CourtList'
import CalendarSection from './Calendar/CalendarSection'
import { AvailabilityProvider } from './Context/AvailabilityContext'
import styled from 'styled-components'
import EditCourt from './EditCourt/EditCourt'

export default function Courts() {
    
    const { section } = useContext(CourtContext)

    return (
        <SectionContainer>
            { section === "" && <CourtList /> }
            { section === "calendar" && <CalendarSection /> }
            { section === "availability" && <AvailabilityProvider /> }
            { section === "edit" && <EditCourt /> }
        </SectionContainer>
    )
}

const SectionContainer = styled.div`
    background: #e9ebed;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
    background-attachment: fixed;
    overflow: visible;
    overflow-x: hidden;
`