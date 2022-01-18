import "../Css/navbar.css";

import { Link, useLocation } from "react-router-dom";

import { BiUserCircle } from "react-icons/bi";
import React from "react";

export default function Navbar() {
  const user = window.localStorage.getItem("loguodeusuario");
  const location = useLocation();

  return (
    <div
      className="navbar-contenedor"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginRight: "40px",
        alignItems: "center",
        height: "80px",
        position: "static",
        backgroundColor: "#ffffff",
      }}
    >
      <Link className="navbar-logo" to="/">
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
          <Link className="navbar-home-gest" to="/profile/courts">
            Canchas
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
          <a className="navbar-home-cont" href="#contact">
            Contacto
          </a>
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
                  size="40"
                  style={{
                    color: "#81b214",
                    marginTop:"0px",
                    marginRight:"20px",
                  }}
                />
              </Link>
              <button
                className="button-logout"
                onClick={() => {
                  window.localStorage.removeItem("loguodeusuario");
                  window.location.reload(false);
                }}
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
