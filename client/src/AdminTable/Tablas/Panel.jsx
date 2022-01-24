import React from "react";
import styled from "styled-components";
function Panel() {
  return (
    <Div>
      <IMG src={require("../../Assets/logo/LogoTurnON.png")} alt="foto" />
      <H1>Panel De Administrador</H1>
    </Div>
  );
}

export const Div = styled.div`
  background: white;
  width: 100%;
`;
export const H1 = styled.h1`
  font-size: 4rem;
  font-family: "Be Vietnam Pro", sans-serif;
  text-align: center;
  color: #81b214;
`;
export const IMG = styled.img`
  margin-left: 38%;
  margin-top: 5%;
  height: 20rem;
  align-items: center;
`;

export default Panel;
