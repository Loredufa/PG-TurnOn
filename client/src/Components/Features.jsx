import React from "react";
import "../Css/features.css";

function Features() {
  return (
    <div className="div-father-Caracter">
      <h1 className="h1-Caracter">Caracteristicas</h1>
      <div className="div-card-1">
        <h2 className="title-card">
          Autoadministrable <br />
          <br /> Podrás crear los Es tan turnos en el momento que quieras desde
          nuestro Panel de Administración.
        </h2>
      </div>
      <div className="div-card-2">
        <h2 className="title-card">
          Simple <br /> <br /> simple que puede ser administrado por vos mismo
          desde cualquier parte del mundo. Horarios Personalizados Podrás
          colocar el tipo de espacio, los rangos horarios y días que trabajas.
        </h2>
      </div>
      <h2>
        24hs en línea <br /> <br /> Tus clientes podrán solicitar turnos en
        cualquier momento, desde su celular.
      </h2>
      <h2>
        Accesibilidad <br /> <br /> Fácil de usar, tus clientes tendrán la
        información de tu espacio deportivo y reservas al alcance de su mano.
      </h2>
      
    </div>
  );
}

export default Features;