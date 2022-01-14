import React from 'react'
import styled from 'styled-components'

export default function HourItem({ start, end }) {

    return (
        <Wrapper>
            <Hours>{`${start} - ${end}`}</Hours>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
const Hours = styled.p`

`