import React, { useState, useEffect, createContext, useContext } from 'react'
import CourtInfo from '../AvailabilityForm/CourtInfo'
import Form from '../AvailabilityForm/Form'
import styled from 'styled-components'
import { CourtContext } from "../Context/CourtContext"

export const AvailabilityContext = createContext()

export const AvailabilityProvider = () => {

    const { setSection } = useContext(CourtContext)

    const [availability, setAvailability] = useState([])

    const week = [
        "Lunes", 
        "Martes", 
        "Miércoles", 
        "Jueves", 
        "Viernes", 
        "Sábado", 
        "Domingo"
    ]

    const [days, setDays] = useState([])

    useEffect(() => {
        // axios.get(`http://localhost:3001/supplier/available/court/${idCourt}`
        setAvailability([
            {
              day: "Lunes",
              hours: [
                "12:00 - 15:00",
                "18:00 - 20:00"
              ]
            },
            {
              day: "Martes",
              hours: [
                "12:00 - 15:00",
                "18:00 - 20:00"
              ]
            },
            {
              day: "Miércoles",
              hours: [
                "12:00 - 15:00",
                "18:00 - 20:00"
              ]
            }
          ])
    }, [])

    return (
      <Wrapper>
        <button onClick={() => setSection("")}>Volver al listado</button>
        <AvailabilityContext.Provider 
            value={{
                availability,
                setAvailability,
                week,
                days,
                setDays
            }}
        >   
            <Form />
            <CourtInfo />
        </AvailabilityContext.Provider>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  
`