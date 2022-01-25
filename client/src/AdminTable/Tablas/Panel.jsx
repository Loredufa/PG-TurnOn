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
  display: flex;
  flex-wrap: wrap;
  background: white;
  width: 100%;
`;
export const H1 = styled.h1`
  float: left;
  font-size: 4rem;
  margin-left: 38rem;
  font-family: "Be Vietnam Pro", sans-serif;
  text-align: center;
  color: #81b214;
  @media (max-width: 810px) {
    margin-left: 16rem;
  }
  @media (max-width: 1092px) {
    margin-left: 50%;
    float: left;
  }
  @media (max-width: 1000px) {
    float: left;
    margin-left: 40%;
  }
  @media (max-width: 860px) {
    float: left;
    margin-left: 16rem;
  }
`;
export const IMG = styled.img`
  float: left;
  margin-left: 48rem;
  margin-top: 5%;
  height: 20rem;
  align-items: center;
  @media (max-width: 1220px) {
    margin-left: 60%;
  }
  @media (max-width: 1000px) {
    float: left;
    margin-left: 50%;
  }
  @media (max-width: 860px) {
    float: left;
    margin-left: 20rem;
  }
`;

export default Panel;
