import "../Css/navbar.css";

import { Link, useLocation } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";
import React from "react";

export default function Navbar() {
  const user = window.localStorage.getItem("loguodeusuario");
  const location = useLocation();

  return (
    <div
      clasName="navbar-contenedor"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "40px",
        alignItems: "center",
        height: "80px",
        /* position: "fixed", */
        backgroundColor: "#ffffff",
      }}
    >
      <Link clasName="navbar-logo" to="/">
        <img
          style={{
            marginLeft: "40px",
          }}
          src={require("../Assets/logo/LogoTurnON-77x52px.png")}
          alt="Logo"
        />
      </Link>
      {location.pathname.includes("/profile") ? (
        <div className="navbar-supplier">
          <Link className="navbar-home-turn" to="/">
            Turnos
          </Link>
          <Link className="navbar-home-gest" to="/">
            Gestionar Turnos
          </Link>
          <Link className="navbar-home-histo" to="/profile/history">
            Historial
          </Link>
          <Link className="navbar-home-perfil" to="/profile/settings">
            Configuración/Perfil
          </Link>
        </div>
      ) : (
        <div className="navbar-home">
          <Link className="navbar-home-inicio" to="/">
            Inicio
          </Link>
          <a className="navbar-home-func" href="#performance">
            Como funciona
          </a>
          <a className="navbar-home-caract" href="#features">
            Características
          </a>
          <Link className="navbar-home-cont" to="/">
            Contacto
          </Link>
          {!user ? (
            <>
              <Link to="/login">
                <button className="navbar-login">Ingresar</button>
              </Link>
              <Link to="/registro">
                <button className="navbar-register">Registrate</button>
              </Link>
            </>
          ) : (
            <>
              <Link className="navbar-profile" to="/profile">
                <BiUserCircle
                  size="35"
                  style={{
                    alineItem: "center",
                  }}
                />
              </Link>
              <button
                onClick={() => {
                  window.localStorage.removeItem("loguodeusuario");
                  window.location.reload(false);
                }}
              >
                logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
