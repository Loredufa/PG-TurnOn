import React from "react";
import styled from "styled-components";
function Panel() {
  return (
    <Div>
      <IMG2 src={require("../../Assets/Images/cancha-6.jpg")} alt="foto" />
      <IMG src={require("../../Assets/logo/LogoTurnON.png")} alt="foto" />
      <H1>Panel De Administrador</H1>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-image: url("../../Assets/Images/cancha-6.jpg")
  width: 100%;
`;
const H1 = styled.h1`
  float: left;
  font-size: 4rem;
  margin-left: 38rem;
  font-family: "Be Vietnam Pro", sans-serif;
  text-align: center;
  color: #cfcfcf;
  font-weight: 900;
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
const IMG = styled.img`
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
export const IMG2 = styled.img`
  position: absolute;
  z-index: -1;
  background: white;
  background-repeat: repeat;
  background-attachment: fixed;
  background-color: rgba(0, 0, 0, 0.712);
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.712);
  width: 100%;
  height: 91.4%;
  opacity: 100%;
  filter: brightness(0.7);
`;

export default Panel;
