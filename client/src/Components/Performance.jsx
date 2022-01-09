import "../Css/performance.css";
import React from "react";

function Performance() {
  return (
    <div className="divPrincipalF">
      <h1 className="h1como">FUNCIONALIDAD</h1>
      <p className="h2como">
        TurnOn es una App, que te da la posibilidad de registrar tu espacio
        deportivo y llevar una agenda de reservas. Podrás organizar tus horarios
        o turnos disponibles, permitiéndole a tus clientes que puedan acceder y
        reservar sin dificultad. <br/><br/> Te brindamos mejorar la logística de atención y
        crear un espacio más cómodo para vos y tus clientes. Potencia tus
        servicios mediante nuestra herramienta, para llegar a nuevos usuarios.<br/><br/>
        Reforzá tu marca. Con una Implementación fácil y rápida.
      </p>
      <img
        className="imgcomo"
        src={require("../Assets/Images/Imagen-Persona.png")}
        alt="img not found"
      />
    </div>
  );
}

export default Performance;