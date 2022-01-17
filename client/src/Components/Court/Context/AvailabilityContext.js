import React, { useState, useEffect, createContext, useContext } from 'react'
import CourtInfo from '../AvailabilityForm/CourtInfo'
import Form from '../AvailabilityForm/Form'
import styled from 'styled-components'
import { CourtContext } from "../Context/CourtContext"
import axios from 'axios'

export const AvailabilityContext = createContext()

export const AvailabilityProvider = () => {

    const { setSection, currentCourt } = useContext(CourtContext)

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
        axios.get(`/supplier/available/court/${currentCourt.id}`)
          .then(res => setAvailability(res.data))
          .catch(err => console.log(err))
    }, [currentCourt.id])

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
            <Container>
                <Form />
                <CourtInfo />
            </Container>
        </AvailabilityContext.Provider>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 88.5vh;
  

`

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: row;
`