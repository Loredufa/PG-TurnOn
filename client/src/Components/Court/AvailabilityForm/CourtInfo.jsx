import React, { useContext } from 'react'
import styled from 'styled-components'
import { AvailabilityContext } from "../Context/AvailabilityContext"

export default function CourtInfo() {

    const { availability } = useContext(AvailabilityContext)

    return (
        <Wrapper>
            {
                availability.map(obj => (
                    <div>
                        <p><strong>{obj.day}</strong></p>
                        {
                            obj.hours.map(h => <p>{h}</p>)
                        }
                    </div>
                ))
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`

`