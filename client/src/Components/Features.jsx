import React from "react";
import "../Css/features.css";

function Features() {
  return (
    <div className="div-father-features">
      <h1 className="h1-features">CARACTERISTICAS</h1>
      <div className="Wraper">
      <div className="div-features-1">
          <h2 className="title-features">Autoadministrable</h2>
          <p className="tex-freatures"> Podrás crear los turnos en el momento que quieras desde
          nuestro Panel de Administración.</p>
      </div>
      <div className="div-features-2">
        <h2 className="title-features">Simple</h2> 
        <p className="tex-freatures"> Puede ser administrado por vos mismo desde cualquier parte del mundo.</p>
        </div>  
        <div className="div-features-3">
        <h2 className="title-features">Horarios Personalizados</h2> 
          <p className="tex-freatures">Podrás colocar el tipo de espacio, los rangos horarios y días que trabajas.</p>
          </div>
          <div className="div-features-4">
          <h2 className="title-features">24hs en línea</h2> 
          <p className="tex-freatures">Tus clientes podrán solicitar turnos en cualquier momento, desde su celular.</p>
        </div>
        <div className="div-features-5">  
      <h2 className="title-features"> Accesibilidad</h2>
      <p className="tex-freatures"> Fácil de usar, tus clientes tendrán la información de tu espacio deportivo y reservas al alcance de su mano.</p>
      </div>
      </div>
      
    </div>
  );
}

export default Features;