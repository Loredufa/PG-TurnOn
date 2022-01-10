import styled from "styled-components";

export const DivGlobal = styled.div`
  padding-top: 10px;
  background: #dedede;
  height: 94vh;
`;
export const DivForm = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 60px;
  flex-direction: column;
  padding: 10px;
  padding-top: 20px;
  width: 700px;
  background-color: #6bac48;
  border-radius: 20px;
`;
export const EditButton = styled.button`
  background-color: #6bac48;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 140px;
  left: 50px;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  padding: 10px;
`;

export const LabelSetting = styled.label`
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  color: rgb(255, 255, 255);
  input {
    font-family: "Be Vietnam Pro", sans-serif;
    margin-right: 32px;
    font-size: 20px;
    padding-left: 20px;
    border-radius: 12px;
    color: black;
    text-shadow: 0px 0px 10px rgb(255, 255, 255, 0);
    border: solid 2px #ccc;
    width: 380px;
    height: 30px;
    background-color: white;
    border-radius: 30px;
  }
`;

export const H1name = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 50px;
  padding-bottom: 50px;
`;
