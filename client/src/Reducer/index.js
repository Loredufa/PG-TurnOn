
import { REGISTER, SET_MESSAGE_REG } from "../Actions/actions"


const initialState = {
  success:false,
  message_reg:'',


  };
  
  function rootReducer (state = initialState, action){
    switch (action.type) {
      case REGISTER:
        return {
          ...state,
          success: true
        };

      case SET_MESSAGE_REG:
        return {
          ...state,
          message_reg: action.payload
        }

     
      default:
        return state;
    }
  };
  
  export default rootReducer;

