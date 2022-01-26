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
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Hours = styled.p`
    margin-right: 7px;

`

const Button = styled.button`
    height: 25px;
    width: 25px;
    text-align: center;
    background: #116913;
    border-style: none;
    border-radius: 10px;
    color: white;
    &:hover {
        background: #0b4619;
    }
`