import React, { useContext } from 'react'
import styled from 'styled-components'
import { CourtContext } from './Context/CourtContext'

export default function CourtCard({ courtInfo }) {

    const { setCurrentCourt, setSection } = useContext(CourtContext)

    const handleClick = (e) => {
        e.preventDefault()
        setCurrentCourt(courtInfo)
    }

    const handleSection = (e) => {
        setCurrentCourt(courtInfo)
        setSection(e.target.value)
    }

    console.log(courtInfo)
    
    return (
        <Wrapper 
            onClick={handleClick}
            style={{ background: "grey" }}
        >   
            <div>
                <h1>{courtInfo.name}</h1>
            </div>
            <div>
                <div>
                    <button>Editar</button>
                    <button>Desactivar</button>
                    <button>Eliminar</button>
                </div>
                <div>
                    <img src={courtInfo.image} alt={courtInfo.name} width="100px" />
                </div>
            </div>
            <div>
                <button value="calendar" onClick={handleSection}>Turnos</button>
                <button value="availability" onClick={handleSection}>Horarios</button>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    background: grey;
    margin-right: 2px;
`