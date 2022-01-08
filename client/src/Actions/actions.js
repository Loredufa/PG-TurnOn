import axios from 'axios';
export const REGISTER = "REGISTRO";




/* export function Register (info) {
  return {
    type: REGISTER,
    payload: info,
  };
} */

export function Register ({name, lastname, mail, cuit, password, businessname, access}){
  return async function(dispatch){
    try{
      const info = await axios.post(`http://localhost:3001/supplier/supplier`, {
        name, 
        lastname, 
        mail,
        cuit,
        password, 
        businessname, 
        access})
      console.log("VER QUE LLEGA POR POST: ", info)
      return info } catch (error){ console.log(error) } //crear un if que muestre un mensaje si ya esta registrado que no se puede registrar
}
};

