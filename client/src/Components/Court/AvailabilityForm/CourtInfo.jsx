import React, { useContext } from 'react'
import styled from 'styled-components'
import { AvailabilityContext } from "../Context/AvailabilityContext"
import axios from 'axios'
import { orderAvailability } from '../Context/helpers/functions'

export default function CourtInfo({ currentCourt }) {

    const { availability, setAvailability } = useContext(AvailabilityContext)

    const handleX = (e) => {
        let info = e.target.value.split(" - ")
        axios.delete(`/supplier/available/${currentCourt.id}`, { data: {date: info[0], initialTime: info[1], endingTime: info[2]} })
            .then(() => {
                axios.get(`/supplier/available/court/${currentCourt.id}`)
                    .then(res => setAvailability(orderAvailability(res.data)))
                    .catch(err => console.log(err))
            }) 
            .catch(err => console.log(err))
    }

    return (
        <Wrapper>
            <Title>Horarios "{currentCourt.name}"</Title>
            {
                availability.length ?
                <MapContainer>
                {
                availability.map(obj => (
                    <DayContainer>
                        <p><strong>{obj.day}</strong></p>
                        <HoursContainer>
                        {
                            obj.hours.map(h => {
                                let date = obj.day
                                return (
                                    <HourContainer>
                                        <Hour>{h}</Hour>
                                        <Button value={`${date} - ${h}`} onClick={handleX}>X</Button>
                                    </HourContainer>
                                )
                            })
                        }
                        </HoursContainer>
                    </DayContainer>
                ))
                }
                </MapContainer> 
                :
                <h3>Aún no has definido ningún horario...</h3>
            }
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    width: 100%;
    
`
const DayContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 40vw; */
    margin-left: 3px;
    margin-right: 3px;
    font-family: 'Be Vietnam Pro', sans-serif;
    color:white;
`
const HoursContainer = styled.div`
    
`
const HourContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
`

const MapContainer = styled.div`
    display: flex;
    flex-direction: row;
    background: #81b214;
    border-radius: 12px;
    padding: 15px;
`

const Title = styled.p`
    font-family: 'Be Vietnam Pro', sans-serif;
    font-size: 25px;
    font-weight: bold;
    color: #81b214;
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

const Hour = styled.span`
    
`