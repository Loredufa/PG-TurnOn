import { useState, useEffect, createContext } from 'react'
import { useSelector } from 'react-redux'
import Courts from '../Courts'
import axios from 'axios'

export const CourtContext = createContext()

export const CourtProvider = () => {

    const [supplierCourts, setSupplierCourts] = useState(null)
    const [currentCourt, setCurrentCourt] = useState(null)
    const [section, setSection] = useState("")

    const { supplier } = useSelector(state => state.user)

    useEffect(() => {
        axios.get(`/supplier/court/${supplier.id}`)
            .then(res => setSupplierCourts(res.data))
            .catch(err => console.log(err))
    }, [supplier.id])

    return (
        <CourtContext.Provider 
            value={{
                setSupplierCourts,
                supplierCourts,
                currentCourt,
                setCurrentCourt,
                section, 
                setSection,
                supplier
            }}
        >   
                <Courts />
        </CourtContext.Provider>
    )
}