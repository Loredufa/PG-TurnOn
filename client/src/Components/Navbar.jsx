import "../Css/navbar.css";
import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Navbar() {
  const user = window.localStorage.getItem("loguodeusuario");
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="navbar-contenedor">
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
          <Link className="navbar-home-turn" to="/profile/guia">
            Guia
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
          <button
            className="button-logout"
            onClick={() => {
              history.push("/");
              window.localStorage.removeItem("loguodeusuario");
              window.location.reload(false);
            }}
          >
            Cerrar sesión
          </button>
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
              <div>
                <button
                  className="button-logout"
                  onClick={() => {
                    window.localStorage.removeItem("loguodeusuario");
                    window.location.reload(false);
                  }}
                >
                  Cerrar sesión
                </button>
              </div>
              <div>
                <Link className="navbar-profile" to="/profile">
                  <BiUserCircle
                    size="80"
                    style={{
                      color: "#81b214",
                      marginTop: "0px",
                      marginRight: "10px",
                    }}
                  />
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
