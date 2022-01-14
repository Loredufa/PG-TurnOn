import {
  CREATE_COURT,
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
  user: JSON.parse(window.localStorage.getItem("loguodeusuario")),
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
      window.localStorage.setItem(
        "loguodeusuario",
        JSON.stringify(action.payload)
      );
      return {
        ...state,
        user: action.payload,
      };

    case CREATE_COURT:
      return { ...state };

    case DELETE_USER:
      console.log("clg del reducer:", action.payload);
      return {
        ...state,
        message_delete: action.payload,
      };

    default:
      return state;
  }
}

export default rootReducer;
