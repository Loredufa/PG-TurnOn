import {
  ADD_USER,
  FIND_CREATED_USER,
  GET_COURT,
  CLOSE_SESSION,
  CHANGE_USER_INFO,
  BEST_COURTS_NEAR_ME,
  GET_COURT_TYPE,
  ADD_TO_FAVORITE,
} from "../actions/index";
import {
  findEmail,
  findCourtByName,
  bestCourts,
  getTypes,
} from "./functionHelper";
import { courts } from "./hardcode";

const initialState = {
  user: {},
  boolean: false,
  court: {},
  bestCourts: [],
  courtTypes: [],
  favorites: [],
  authToken: null,
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
        authToken: action.payload.user ? "abc123" : null,
      };
    case GET_COURT:
      return {
        ...state,
        court: findCourtByName(courts, action.payload),
      };
    case CLOSE_SESSION:
      return {
        ...state,
        boolean: false,
        authToken: null,
      };
    case CHANGE_USER_INFO:
      return {
        ...state,
        user: { user: action.payload },
      };
    case BEST_COURTS_NEAR_ME:
      return {
        ...state,
        bestCourts: bestCourts(courts, action.payload),
      };
    case GET_COURT_TYPE:
      return {
        ...state,
        courtTypes: getTypes(courts, action.payload),
      };
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
