import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { BiUserCircle } from 'react-icons/bi'

export default function Navbar() {

    const { user } = useSelector(state => state)
    const location = useLocation()

    return (
        <div style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
        }}> 
            <Link to="/">
                Logo
            </Link>
            {
                location.pathname.includes("/profile") ?
                    <div>
                        <Link to="/">
                            Turnos
                        </Link>
                        <Link to="/">
                            Gestionar Turnos
                        </Link>
                        <Link to="/profile/history">
                            Historial
                        </Link>
                        <Link to="/profile/settings">
                            Configuración/Perfil
                        </Link>
                    </div>
                    :
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
                                <Link to="/profile">
                                    <button>
                                        <BiUserCircle />
                                    </button>
                                </Link>
                        }
                    </div>
            }
        </div>
    )
}
