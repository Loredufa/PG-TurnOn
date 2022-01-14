import React, { useContext } from 'react'
import { CourtContext } from './Context/CourtContext'
import styled from 'styled-components'
import CourtCard from './CourtCard'

export default function CourtList() {

    const { supplierCourts } = useContext(CourtContext)

    return (
        <Wrapper>
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