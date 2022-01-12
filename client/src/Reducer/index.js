import {
  REGISTER,
  SET_MESSAGE_REG,
  SET_MESSAGE_USER,
  SET_USER,
  CHANGE_SUPPLIER_PROFILE,
} from "../Actions/actions";

const initialState = {
  success: false,
  message_reg: "",
  message_user: "",
  user: null,
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        success: true,
      };

    case SET_MESSAGE_REG:
      return {
        ...state,
        message_reg: action.payload,
      };
    case SET_MESSAGE_USER:
      return {
        ...state,
        message: action.payload,
      };
    case SET_USER:
      console.log(action.payload);
      return {
        ...state,
        user: action.payload,
      };
    
      /* case CHANGE_SUPPLIER_PROFILE:
        console.log(action.payload);
        return {
          ...state,
          user: action.payload,
        };
 */
    
    default:
      return state;
  }
}

export default rootReducer;
