import React, { useState, useEffect, createContext, useContext } from 'react'
import CourtInfo from '../AvailabilityForm/CourtInfo'
import Form from '../AvailabilityForm/Form'
import styled from 'styled-components'
import { CourtContext } from "../Context/CourtContext"
import axios from 'axios'
import { orderAvailability } from './helpers/functions'

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
          .then(res => setAvailability(orderAvailability(res.data)))
          .catch(err => console.log(err))
    }, [currentCourt.id])

    return (
      <Wrapper>
        <ButtonContainer>
            <Button onClick={() => setSection("")}>Volver a la lista de canchas</Button>
        </ButtonContainer>
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
                <CourtInfo currentCourt={currentCourt}/>
            </Container>
        </AvailabilityContext.Provider>
      </Wrapper>
    )
}

const Wrapper = styled.div`
  height: 88.5vh;
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 78.5vh;
    background: white;
    border-radius: 30px;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 10vh;
    
`

const Button = styled.button`
    width: 230px;
    margin-left: 28px;
    background: #81b214;
    color: white;
    border-style: none;
    border-radius: 20px;
    height: 41px;
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 15px;
`