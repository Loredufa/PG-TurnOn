import { ADD_USER, FIND_CREATED_USER, GET_COURT } from "../actions/index";
import { findEmail, findCourtByName } from "./functionHelper";

const courts = [
  {
    name: "los carpinchos",
    price: "1500-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/FootballCourt.jpg"),
  },
  {
    name: "la pelota siempre al 10",
    price: "1500-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/FootballCourt.jpg"),
  },
];

const initialState = {
  user: {},
  boolean: false,
  court: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return { ...state };
    /*return {
        ...state,
        users: state.users.concat(action.payload),
      };
      */
    case FIND_CREATED_USER:
      return {
        ...state,
        boolean: action.payload.user ? true : false,
        user: action.payload,
      };
    case GET_COURT:
      return {
        ...state,
        court: findCourtByName(courts, action.payload),
      };

    default:
      return state;
  }
};

export default reducer;
