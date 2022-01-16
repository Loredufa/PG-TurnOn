import React, { useContext } from 'react'
import styled from 'styled-components'
import { CourtContext } from './Context/CourtContext'
import axios from 'axios'
import { BiCalendar, BiTimeFive } from 'react-icons/bi'

export default function CourtCard({ courtInfo }) {

    const { 
        setCurrentCourt, 
        setSection, 
        supplier, 
        setSupplierCourts 
    } = useContext(CourtContext)

    const handleSection = (e) => {
        console.log(e.target.value)
        setCurrentCourt(courtInfo)
        setSection(e.target.value)
    }
    
    const handleDelete = () => {
        axios.delete(`http://localhost:3001/supplier/court/${courtInfo.id}`)
            .then(() => {
                axios.get(`http://localhost:3001/supplier/court/${supplier.id}`)
                    .then(res => setSupplierCourts(res.data))
                    .catch(err => console.log(err))
            })
            .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <Info>
                <p>{courtInfo.name.toUpperCase()}</p>
                <Img src={courtInfo.image} alt={courtInfo.name} />
            </Info>
            <BottomDiv>
                <Buttons1Container>
                        <Button>Editar</Button>
                        <Button>Desactivar</Button>
                        <ButtonRed onClick={handleDelete}>Eliminar</ButtonRed>
                </Buttons1Container>
                <Buttons2Container>
                    <Button value="calendar" onClick={handleSection}>Turnos</Button>
                    <Button value="availability" onClick={handleSection}>Horarios</Button>
                </Buttons2Container>
            </BottomDiv>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: #81b214;
    height: 60vh;
    width: 250px;
    margin: 5px;
    padding: 2%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-content: center;
    border-radius: 10px;
`

const Button = styled.button`
    background: #e9ebed;
    color: black;
    border-radius: 30px;
    border-style: none;
    height: 30px;
    width: 110px;
    font-size: 14px;
    margin: 3px;
    &:hover {
        background: #0b4619;
        color: white;
    }
`
const ButtonRed = styled.button`
    background: #e9ebed;
    color: black;
    border-radius: 30px;
    border-style: none;
    height: 30px;
    width: 110px;
    font-size: 14px;
    margin: 3px;
    &:hover {
        background: red;
        color: white;
    }
`

const ButtonIcon = styled.button`
    background: #e9ebed;
    color: black;
    border-radius: 30px;
    border-style: none;
    height: 40px;
    width: 60px;
    font-size: 14px;
    margin: 3px;
    &:hover {
        background: #0b4619;
        color: white;
    }
`

const Img = styled.img`
    width: 200px;
`

const Buttons1Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Buttons2Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

const BottomDiv = styled.div`

`