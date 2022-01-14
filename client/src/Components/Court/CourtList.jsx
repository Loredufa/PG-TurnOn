import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import styled from 'styled-components'
import CourtCard from './CourtCard'
import { Link } from 'react-router-dom'

export default function CourtList() {

    const { supplierCourts } = useContext(CourtContext)

    return (
        <Wrapper>
            <Link to="/profile/courts/create">
                <button>CREAR CANCHA</button>   
            </Link>
            {
                supplierCourts && 
                <>
                    {
                        supplierCourts.map(x => (
                            <CourtCard 
                                key={x.id}
                                courtInfo={x}
                            />
                        ))
                    }
                </>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`

`