import React from 'react'
import styled from "styled-components"
import "../Css/Beginning.css";


export default function Beginning() {

    return (
      <div class="card">
      <div class="details">
      <div class="center">
        <Title>Comencemos</Title>
        <Title2>Ingresa a "Canchas" y luego a "Crear Cancha" </Title2>
        <img
        className="crearCancha"
        src={require("../Assets/Images/crearCancha.png")}
        alt="crearCancha"
      />
        <P>Debes completar todos los datos, en especial el campo caracteristicas donde colocaras las especificaciones y atributos del lugar.</P>
        <img
        className="formulario"
        src={require("../Assets/Images/formularioCreacion.png")}
        alt="formulario"
      />
        <Title2>Ingresa a horarios</Title2>
        <img
        className="horarios"
        src={require("../Assets/Images/horarios.png")}
        alt="horarios"
      />
        <P>Selecciona los dias de trabajo y horario de apertura y cierre para cada uno. Una vez finalizado vuelve a la lista de canchas.</P>
        <img
        className="franja"
        src={require("../Assets/Images/franjaHoraria.png")}
        alt="franja"
      />
        <Title2>Ya puedes recibir reservas</Title2>
          <P>Dentro de "Turnos" podras encontrar todas tus reservas. Debes hacer click en el dia del calendario para verlas.</P>
        <img
        className="turnos"
        src={require("../Assets/Images/turnos.png")}
        alt="turnos"
      />
        <P>Tienes opcion de cancelar un turno si decides que tu cancha no estará disponible en ese horario</P>
        <Title2>Tambien tienes una pestaña de "Historial"</Title2>
        <img
        className="historial"
        src={require("../Assets/Images/historial.png")}
        alt="historial"
      />
        <P>Aqui te detallaremos todos los movimientos que se registraron.</P>
        </div>
    </div>
  </div>

    )
}

export const Title = styled.h1`
color: #81b214;
margin-left: 2%;
font-size: 300%`

export const Title2 = styled.h3`
color: #252525;
margin-left: 2%;
font-size: 200%`

export const P = styled.p`
color: #252525;
margin-left: 2%;
font-size: 180%`