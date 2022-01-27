import styled from "styled-components";

export const DivGlobal = styled.div`
  padding-top: 80px;
  background: #e9ebed;
  height: 850px;
  width: 100%;
  font-family: "Be Vietnam Pro", sans-serif;
  .p {
    margin-left: 3.2%;
    font-weight: bold;
    font-size: 2vh;
  }
`;
export const DivForm = styled.div`
  width: 45rem;
  height: auto;
  display: flex;
  margin-left: 50px;
  margin-top: 60px;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: space-between;
  flex-grow: 0;
  padding: 10px;
  padding-bottom: 30px;
  padding-top: 30px;
  background-color: #81b214;
  border-radius: 20px;
  box-shadow: 10px 10px 15px 1px #1169127c;
  p {
    color: white;
    text-align: center;
    margin-left: 32%;
    font-family: "Be Vietnam Pro", sans-serif;
  }
  
  @media (max-width: 740px){
    width: 37rem;
  }
`;

export const GuardarButton = styled.button`
  background-color: #81b214;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 200px;
  left: 230px;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  padding: 10px;
  &:disabled {
    background-color: red;
    color: white;
  }
  &:hover {
    background-color: #179f34;
    color: white;
  }
`;
export const VolverButton = styled.button`
  background-color: #81b214;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 200px;
  left: 50px;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  padding: 10px;
  &:hover {
    background-color: white;
    color: #81b214;
  }
`;

export const LabelSetting = styled.label`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 15px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  input {
    font-family: "Be Vietnam Pro", sans-serif;
    margin-left: 32px;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 12px;
    color: black;
    text-shadow: 0px 0px 10px rgb(255, 255, 255, 0);
    border: none;
    width: 23.75rem;
    height: 41px;
    background-color: white;
    border-radius: 30px;
  }
  p {
    font-family: "Be Vietnam Pro", sans-serif;
    font-size: 15px;
    margin-left: 0px;
  }
  @media (max-width: 740px){
    input {
      margin-left: 18px;
      width: 20rem;
    }
  }
`;

export const H1name = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 50px;
  padding-bottom: 50px;
  color: #81b214;
  font-size: 45px;
`;
