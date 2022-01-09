import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'

export default function Navbar() {

    const { user } = useSelector(state => state)

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}> 
            <Link to="/">
                Logo
            </Link>
            <div>
                <Link to="/">
                    Inicio
                </Link>
                <Link to="/">
                    Como funciona
                </Link>
                <Link to="/">
                    Características
                </Link>
                <Link to="/">
                    Contacto
                </Link>
                {
                    !user ?
                    <>
                        <Link to="/login">
                            <button>
                                Ingresar
                            </button>
                        </Link>
                        <Link to="/registro">
                            <button>
                                Registrate
                            </button>
                        </Link>
                    </>
                        :
                        <Link>
                            <button>
                                <BiUserCircle />
                            </button>
                        </Link>
                }
            </div>
        </div>
    )
}
