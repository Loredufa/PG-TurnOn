import { ADD_USER, FIND_CREATED_USER } from "../actions/index";
import { findEmail } from "./functionHelper";

const initialState = {
  users: [],
  boolean: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: state.users.concat(action.payload),
      };
    case FIND_CREATED_USER:
      return {
        ...state,
        boolean: findEmail(state.users, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
