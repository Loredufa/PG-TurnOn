import React from "react";
import TableBookings from "./History/TableBookings";
import styled from "styled-components";

export default function History() {
  return (
    <BackGround>
      <Title>Historial de Reservas</Title>

      <TableBookings />
    </BackGround>
  );
}

export const Title = styled.h1`
  color: #81b214;
  margin-left: 2%;
  font-size: 300%;
`;

export const BackGround = styled.div`
  background: #e9ebed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 90.5vh;
  background-attachment: fixed;
  overflow: visible;
  overflow-x: hidden;
  padding-top: 80px;
`;
