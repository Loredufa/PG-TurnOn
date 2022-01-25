import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import styled from 'styled-components'
import CourtCard from './CourtCard'
import { Link } from 'react-router-dom'

export default function CourtList() {

    const { supplierCourts } = useContext(CourtContext)

    return (
        <Wrapper>
            <H1name>CANCHAS</H1name>
            <CreateContainer>
                <CreateLink to="/profile/courts/create">
                    <Button>CREAR CANCHA</Button>   
                </CreateLink>
            </CreateContainer>
            {
                supplierCourts && 
                <CourtCards>
                    {
                        supplierCourts.map(x => (
                            <CourtCard 
                                key={x.id}
                                courtInfo={x}
                            />
                        ))
                    }
                </CourtCards>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100%;
`
const H1name = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 50px;
  padding-bottom: 5px;
  color: #81b214;
  font-size: 45px;
`;

const CourtCards = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

const CreateContainer = styled.div`
    height: 10vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CreateLink = styled(Link)`

`

const Button = styled.button`
    background: #81b214;
    color: white;
    border-radius: 30px;
    border-style: none;
    height: 45px;
    width: 180px;
    font-size: 16px;
    font-family:'Be Vietnam Pro', sans-serif;
    &:hover {
        background: white;
        color:#81b214;
    }
`