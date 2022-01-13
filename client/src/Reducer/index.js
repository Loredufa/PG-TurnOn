import {
  CHANGE_SUPPLIER_PROFILE,
  DELETE_USER,
  REGISTER,
  SET_MESSAGE_REG,
  SET_MESSAGE_USER,
  SET_USER,
} from "../Actions/actions";

const initialState = {
  success: false,
  message_reg: "",
  message_user: "",
  message_delete: "",
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
    case DELETE_USER:
      console.log("clg del reducer:", action.payload);
      return {
        ...state,
        message_delete: action.payload,
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
