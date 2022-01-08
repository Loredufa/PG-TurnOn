import {
  ADD_USER,
  FIND_CREATED_USER,
  GET_COURT,
  CLOSE_SESSION,
  CHANGE_USER_INFO,
  BEST_COURTS_NEAR_ME,
} from "../actions/index";
import { findEmail, findCourtByName, bestCourts } from "./functionHelper";

const courts = [
  {
    id: 1,
    name: "los carpinchos",
    price: "1500-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/FootballCourt.jpg"),
    rating: "4.8",
    location: "20",
  },
  {
    id: 2,
    name: "la pelota siempre al 10",
    price: "1500-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/FootballCourt.jpg"),
    rating: "4.2",
    location: "5000",
  },
  {
    id: 3,
    name: "chapelco Golf",
    price: "4000-5000",
    timeTables: ["9", "10", "11"],
    img: require("../../../Images/GolfCourt.jpg"),
    rating: "4.2",
    location: "10",
  },
  {
    id: 4,
    name: "tenis club",
    price: "1000-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/GolfCourt.jpg"),
    rating: "3",
    location: "15",
  },
  {
    id: 5,
    name: "Paddle club",
    price: "1000-2000",
    timeTables: ["9 a 10", "10 a 11"],
    img: require("../../../Images/PaddleCourt.jpg"),
    rating: "4.5",
    location: "15",
  },
];

const initialState = {
  user: {},
  boolean: false,
  court: {},
  bestCourts: [],
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
    case CLOSE_SESSION:
      return {
        ...state,
        boolean: false,
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

    default:
      return state;
  }
};

export default reducer;
