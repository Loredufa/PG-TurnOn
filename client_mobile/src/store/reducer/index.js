import {
  ADD_USER,
  FIND_CREATED_USER,
  GET_SUPPLIERS_BY_NAME,
  CLOSE_SESSION,
  CHANGE_USER_INFO,
  BEST_COURTS_NEAR_ME,
  GET_COURT_TYPE,
  ADD_TO_FAVORITE,
  BOOK_COURT,
  SET_SCREEN_DIMENSIONS,
  GET_COURT_BY_SPORT,
  CHANGE_USER_PASS,
  CHANGE_MESSAGE
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
  bookings: [],
  authToken: null,
  screenWidth: 375, 
  numColumns: 6, 
  titleSize: 62,
  courtsBySports: [],
  messageBack: '',
  suppliers: [],
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
    case GET_SUPPLIERS_BY_NAME:
      return {
        ...state,
        suppliers: action.payload 
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
    case CHANGE_USER_PASS:
      return {
        ...state,
        //verificar aca cual es la respuesta para ver que hago en front
        messageBack: action.payload,
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
        favorites: state.favorites.includes(action.payload)? 
        state.favorites.filter(element => element !== action.payload) 
        : [...state.favorites , action.payload]
      };
    case BOOK_COURT:
      return {
        ...state,
        bookings: state.bookings.includes(action.payload)? state.bookings : [...state.bookings, action.payload]
      }
    case SET_SCREEN_DIMENSIONS:
      return {
        ...state,
        screenWidth: action.payload.screenWidth, 
        numColumns: action.payload.numColumns, 
        titleSize: action.payload.titleSize,
      }
    case GET_COURT_BY_SPORT:
      return {
        ...state,
        courtsBySports: action.payload,
      }
    case CHANGE_MESSAGE:
      return {
        ...state, 
        messageBack: '',
      }
    default:
      return state;
  }
};

export default reducer;
