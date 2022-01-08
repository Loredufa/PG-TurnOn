import axios from 'axios';
export const REGISTER = "REGISTRO";
export const SET_MESSAGE_REG = "SET_MESSAGE_REG";



export function Register (payload){
  return async function(dispatch){
    try{
      const info = await axios.post(`http://localhost:3001/supplier/supplier`, payload)
      console.log("QUE MANDA EL FRONT AL BACK", info)
      if(info.data.message){
        console.log("VER SI SE MUESTRA MENSAJE", info.data.message)
        return dispatch({
          type: SET_MESSAGE_REG,
          payload: info.data.message
        })
      } else {
        return dispatch({
          type: REGISTER,
          
        })
      }
      
} catch (error){ console.log(error) }
}
}; 