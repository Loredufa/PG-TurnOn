import styled from "styled-components";

export const DivGlobal = styled.div`
  padding-top: 10px;
  background: #dedede;
  height: 91vh;
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
  background-color: #6bac48;
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
`;

export const DeleteButton = styled.button`
  background-color: #6bac48;
  position: absolute;
  font-family: "Be Vietnam Pro", sans-serif;
  font-size: 14px;
  top: 180px;
  left: 36rem;
  width: 140px;
  height: 45px;
  cursor: pointer;
  border-radius: 30px;
  border-style: none;
  color: white;
  text-align: center;
  padding: 10px;
  .link {
    outline: none;
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
    border: solid 2px #ccc;
    width: 380px;
    height: 30px;
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
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
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
`;
