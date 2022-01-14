import { useState, useEffect, createContext } from 'react'
import Courts from '../Courts'

export const CourtContext = createContext()

export const CourtProvider = () => {

    const [supplierCourts, setSupplierCourts] = useState(null)
    const [currentCourt, setCurrentCourt] = useState(null)
    const [section, setSection] = useState("")
    

    useEffect(() => {
        // axios.get() ---> me trae la lista de canchas de este proveedor
        setSupplierCourts([
            {
                id: 1,
                name: "Cancha1"
            },
            {
                id: 2,
                name: "Cancha2"
            }
        ])
    }, [])

    return (
        <CourtContext.Provider 
            value={{
                supplierCourts,
                currentCourt,
                setCurrentCourt,
                section, 
                setSection
            }}
        >   
            <Courts />
        </CourtContext.Provider>
    )
}