import React from 'react'
import styled from "styled-components"


export default function Beginning() {

    return (
            <div class="card">
    <div class="details">
      <div class="center">
        <Title>Comencemos<br><span>Ingresa a cancha y luego a crear cancha </span></br></Title>
        <img
        className="crearCancha"
        src={require("../Assets/Images/crearCancha.png")}
        alt="crearCancha"
      />
        <p>Debes completar todos los datos, en especial el campo caracteristicas donde colocaras las especificaciones y atributos del lugar.</p>
        <img
        className="formulario"
        src={require("../Assets/Images/formularioCreacion.png")}
        alt="formulario"
      />
        <h2>Ingresa a horarios</h2>
        <img
        className="horarios"
        src={require("../Assets/Images/horarios.png")}
        alt="horarios"
      />
        <p>Selecciona los dias de trabajo y horario de apertura y cierre para cada uno. Una vez finalizado vuelve a la lista de canchas.</p>
        <img
        className="franja"
        src={require("../Assets/Images/franjaHoraria.png")}
        alt="franja"
      />
        <h3>Ya puedes recibir reservas<br><span>Dentro de turnos podras encontrar todas tus reservas. Debes hacer click en el dia del calendario para verlas.</span></br></h3>
        <img
        className="turnos"
        src={require("../Assets/Images/turnos.png")}
        alt="turnos"
      />
        <p>Tienes opcion de cancelar un turno si decides que tu cancha no estará disponible en ese horario</p>
        <h1>Tambien tienes una pestaña de Historial</h1>
        <img
        className="historial"
        src={require("../Assets/Images/historial.png")}
        alt="historial"
      />
        <p>Aqui te detallaremos todos los movimientos que se registraron</p>
        </div>
    </div>
  </div>

    )
}

export const Title = styled.h1`
color: #81b214;
margin-left: 2%;
font-size: 300%`