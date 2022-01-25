import {
  ADD_USER,
  FIND_CREATED_USER,
  GET_SUPPLIERS_BY_NAME,
  CLOSE_SESSION,
  CHANGE_USER_INFO,
  BEST_COURTS_NEAR_ME,
  GET_COURT_TYPE,
  ADD_TO_FAVORITE,
  GET_FAVORITES,
  DELETE_FROM_FAVORITE,
  BOOK_COURT,
  SET_SCREEN_DIMENSIONS,
  GET_COURT_BY_SPORT,
  CHANGE_USER_PASS,
  CHANGE_MESSAGE,
  GOOGLE_LOGIN,
  GET_SUPPLIER_BY_SPORT,
  GET_COURTS_SUPPLIER_SPORT,
  GET_BOOKINGS,
  EDIT_BOOKING,
  DELETE_BOOKING,
  DELETE_USER,
  GET_COURTS_SUPPLIER,
  GET_ALL_SUPPLIERS,
  GET_SUPPLIER_LOCATION,
  MP_BOOKING_DETAIL,
  COURT_AVAILABILITY,
  FIND_PAYMENT,
  SET_MESSAGE,
  GET_VOUCHERS,
  GET_GEO_LOCATION,
  GET_SUPPLIER_BY_LOCATION_RATING,
  GET_COMPLETED_BOOKINGS,
  CHANGE_BOOKING_RATED,
  RATE_SUPPLIER
} from "../actions/index";
import {
  findEmail,
  findCourtByName,
  bestCourts,
  getTypes,
  rutas,
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
  vouchers:[],
  completedBookings:[],
  bookingsRate: [],
  authToken: null, //"abc123",
  screenWidth: 375,
  numColumns: 6,
  titleSize: 62,
  courtsBySports: [],
  messageBack: "",
  suppliers: [],
  googlesession: false,
  googleCreated: false,
  flagBooking: true,
  supplierAddFav: 0,
  allSuppliers: [],
  suppliersLocation: [],
  MPurl: "",
  availables: [],
  payment: [],
  voucher: [],
  geoLocation: {},
  supplierByLocation: [],
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
    case DELETE_USER:
      return {
        ...state,
        messageBack: action.payload,
      };
    case FIND_CREATED_USER:
      return {
        ...state,
        boolean: action.payload.user ? true : false,
        user: action.payload,
        authToken: action.payload.user ? "abc123" : null,
        googlesession: false,
        googleCreated: false,
      };
    case GOOGLE_LOGIN:
      return {
        ...state,
        user: action.payload,
        authToken: action.payload.user ? "abc123" : null,
        googlesession: true,
        googleCreated: action.payload.created,
      };
    case GET_SUPPLIERS_BY_NAME:
      return {
        ...state,
        suppliers: action.payload,
      };
    case GET_ALL_SUPPLIERS:
      return {
        ...state,
        allSuppliers: action.payload,
      };
    case CLOSE_SESSION:
      return {
        ...state,
        boolean: false,
        authToken: null,
        googlesession: false,
        completedBookings:[]
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
        /*favorites: state.favorites.includes(action.payload)? 
        state.favorites.filter(element => element !== action.payload) 
        : [...state.favorites , action.payload]*/
        supplierAddFav: action.payload[0].supplierId,
      };
    case GET_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
      };
    case DELETE_FROM_FAVORITE:
      return {
        ...state,
        messageBack: action.payload,
        supplierAddFav: 0,
      };
      case SET_MESSAGE:
        return {
          ...state,
          messageBack: action.payload,
        }
      case COURT_AVAILABILITY: 
        return {
          ...state,
          availables: action.payload.availability,
        }
    // case GET_VOUCHERS: 
    // return {
    //   ...state, 
    //   flagBooking: !state.flagBooking,
    //   vouchers:  action.payload.hasOwnProperty("booking")?  action.payload : []
    // }
    case BOOK_COURT:
      return {
        ...state,
        messageBack: action.payload === "" ? state.messageBack : action.payload,
        flagBooking: !state.flagBooking,
        //bookings: state.bookings.includes(action.payload)? state.bookings : [...state.bookings, action.payload]
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.payload?.hasOwnProperty("message")
          ? []
          : action.payload.result,
      };
    case GET_VOUCHERS:
      return {
        ...state,
        vouchers: action.payload?.hasOwnProperty("message") ? [] : action.payload.result,
      }
    case GET_COMPLETED_BOOKINGS:
      return {
        ...state,
        completedBookings: action.payload?.hasOwnProperty("message") ? [] : [action.payload.result],
      }
    case FIND_PAYMENT:
      return {
        ...state,
        payment: action.payload.payment,
      };
    case DELETE_BOOKING:
      return {
        ...state,
        //messageBack: action.payload,
        flagBooking: !state.flagBooking,
      };
    case CHANGE_BOOKING_RATED: 
    return {
      ...state,
      completedBookings: [],
    }
    case EDIT_BOOKING:
      return {
        ...state,
        flagBooking: !state.flagBooking,
        messageBack:
          action.payload.status === "canceled"
            ? { message: "Reserva cancelada con exito" }
            : { message: "Reserva modificada con exito" },
      };
    case MP_BOOKING_DETAIL:
      return {
        ...state,
        MPurl: action.payload.init_point,
      };
    case SET_SCREEN_DIMENSIONS:
      return {
        ...state,
        screenWidth: action.payload.screenWidth,
        numColumns: action.payload.numColumns,
        titleSize: action.payload.titleSize,
      };
    case GET_COURT_BY_SPORT:
      return {
        ...state,
        courtsBySports: action.payload,
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageBack: "",
      };
    case GET_SUPPLIER_BY_SPORT:
      return {
        ...state,
        suppliers: action.payload.message ? [] : action.payload,
      };
    case GET_COURTS_SUPPLIER_SPORT:
      return {
        ...state,
        courtsBySports: action.payload,
      };
    case GET_COURTS_SUPPLIER:
      return {
        ...state,
        courtsBySports: action.payload,
      };
    case GET_SUPPLIER_LOCATION:
      return {
        ...state,
        suppliersLocation: rutas(state.allSuppliers),
      };
    case GET_GEO_LOCATION:
      return {
        ...state,
        geoLocation: action.payload,
      };
    case GET_SUPPLIER_BY_LOCATION_RATING:
      return {
        ...state,
        supplierByLocation: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
