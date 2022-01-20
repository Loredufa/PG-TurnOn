import React from 'react'
import styled from 'styled-components'

export default function HourItem({ start, end, hours, setHours }) {

    const handleClick = () => {
        let filtered = hours.filter(obj => (obj.start !== start && obj.end !== end))
        setHours(filtered)
    }

    return (
        <Wrapper>
            <Hours>{`${start} - ${end}`}</Hours>
            <Button onClick={handleClick}>X</Button>
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
const Hours = styled.p`

`

const Button = styled.button`

`