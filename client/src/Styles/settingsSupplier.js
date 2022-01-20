import styled from "styled-components";

export const DivGlobal = styled.div`
  padding-top: 10px;
  background: #e9ebed;
  height: 91vh;
`;
export const DivForm = styled.div`
  display: flex;
  margin-left: 50px;
  margin-top: 60px;
  flex-direction: column;
  padding: 25px;
  padding-top: 20px;
  width: 720px;
  background-color: #81b214;
  border-radius: 20px;
  p {
    color: white;
    text-align: center;
    margin-left: 32%;
    font-family: "Be Vietnam Pro", sans-serif;
  }
`;

export const ContenedorForm = styled.div`
  display: flex;
  flex-direction: row;
`;
export const EditButton = styled.button`
  background-color: #81b214;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 180px;
  left: 3rem;
  width: 140px;
  height: 54px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  padding: 10px;
  &:disabled {
    background-color: red;
    color: white;
  }
  &:hover{
    background-color:white;
    color:#81b214;

  }
`;

export const EditButton2 = styled.button`
  background-color: #6bac48;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 180px;
  left: 3rem;
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
`;

export const VolverButton = styled.button`
  background-color: #6bac48;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  top: 180px;
  left: 14rem;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  padding: 10px;
`;

export const UpdateButton = styled.button`
  background-color: #81b214;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  top: 180px;
  left: 25rem;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  text-align: center;
  padding: 10px;
  line-height: 18px;
  &:hover{
    background-color:white;
    color:#81b214;

  }
`;

export const DeleteButton = styled.button`
  background-color: #81b214;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  top: 180px;
  left: 36rem;
  width: 140px;
  height: 54px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  text-align: center;
  line-height: 18px;
  padding: 10px;
  .link {
    outline: none;
    color: white;
  }
  &:hover{
    background-color: #d62c1c;
    color: white;

  }
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
    border: none;
    width: 380px;
    height: 41px;
    background-color: white;
    border-radius: 30px;
  }
`;

export const LabelSetting2 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 20px;
  ${"" /* text-align: center; */}
  justify-content: space-between;
  padding: 13px;
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 30px;
  color: rgb(255, 255, 255);
  background: rgba(25, 123, 0, 0.2);
  label {
    padding: 0px;
    color: white;
    margin-left: 10px;
    text-align: center;
  }
`;
export const H1name = styled.h1`
  font-family: "Be Vietnam Pro", sans-serif;
  margin-left: 50px;
  padding-bottom: 50px;
  color:#81b214;
  font-size: 45px
`;
