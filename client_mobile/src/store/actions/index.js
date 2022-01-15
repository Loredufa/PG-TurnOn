import axios from "axios";
export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_SUPPLIERS_BY_NAME = "GET_SUPPLIERS_BY_NAME";
export const CLOSE_SESSION = "CLOSE_SESSION";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";
export const BEST_COURTS_NEAR_ME = "BEST_COURTS_NEAR_ME";
export const GET_COURT_TYPE = "GET_COURT_TYPE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const BOOK_COURT = "BOOK_COURT";
export const SET_SCREEN_DIMENSIONS = "SET_SCREEN_DIMENSIONS";
export const GET_COURT_BY_SPORT = "GET_COURT_BY_SPORT";
export const CHANGE_USER_PASS = "CHANGE_USER_PASS"
export const CHANGE_MESSAGE = "CHANGE_MESSAGE";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GET_SUPPLIER_BY_SPORT = "GET_SUPPLIER_BY_SPORT";
export const GET_COURTS_SUPPLIER_SPORT = "GET_COURTS_SUPPLIER_SPORT";
export const GET_BOOKINGS = "GET_BOOKINGS";
/*
export function addUser(data) {
  return {
    type: ADD_USER,
    payload: data,
  };
}
*/
export function getCourtBySport (sport) {
  return async function (dispatch) {
    try {
      const postUser = await axios.get("http://localhost:3001/user/court?sport="+sport);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?sport="+sport); 
      console.log(postUser.data);
      dispatch({
        type: GET_COURT_BY_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCourtBySportSupplier (name , sport) {
  return async function (dispatch) {
    try {
      const postUser = await axios.get("http://localhost:3001/user/court?name="+name); 
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?name="+name); 
      console.log("Cancha buscada en back",postUser.data);
      dispatch({
        type: GET_COURTS_SUPPLIER_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSupplierBySport (sport) {
  return async function (dispatch) {
    try {
      const postUser = await axios.get("http://localhost:3001/user/supplier?sport="+sport); 
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/supplier?sport=" + sport); 
      console.log(postUser.data);
      dispatch({
        type: GET_SUPPLIER_BY_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function setScreenDimensions (screenWidth, numColumns, titleSize){
  return function (dispatch) {
    dispatch({
      type: SET_SCREEN_DIMENSIONS,
      payload: {screenWidth, numColumns, titleSize}
    });
  };  
}


export function bookCourt (courtId , userId) {
  return async function (dispatch) {
    try {
      const postUser = await axios.post("http://localhost:3001/user/bookings", {
      //  const postUser = await axios.post("https://turnon1.herokuapp.com/user/bookings", {
        courtId,
        userId,
        bookingCode: 1231,
        status: "Reservado"
      });
      console.log(postUser.data);
      dispatch({
        type: BOOK_COURT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function getBookings (userId) {
  return async function (dispatch) {
    try {
      const postUser = await axios.get("http://localhost:3001/user/bookings/"+userId);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/bookings/"+userId)
      dispatch({
        type: GET_BOOKINGS,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function closeSession() {
  return function (dispatch) {
    dispatch({
      type: CLOSE_SESSION,
    });
  };
}

export function addUser({ name, lastname, phone, email, password }) {
  return async function (dispatch) {
    try {
      const postUser = await axios.post("http://localhost:3001/user/user", {
      //const postUser = await axios.post("https://turnon1.herokuapp.com/user/user", {
        name,
        lastname,
        phone,
        mail: email,
        password,
      });
      return postUser;
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeUserInfo(id , userInfo) {
  return async function (dispatch) {
    try {
      const newInfo = await axios.put("http://localhost:3001/user/user/"+id, 
      //const newInfo = await axios.put("https://turnon1.herokuapp.com/user/user/"+id, 
        userInfo
      ); 
      console.log("Informacion recibida" , newInfo.data);
      dispatch({
        type: CHANGE_USER_INFO,
        payload: newInfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeUserPass(id , userInfo) {
  return async function (dispatch) {
    try {
      const newInfo = await axios.put("http://localhost:3001/user/user/password/"+id,  {
        //const newInfo = await axios.put("https://turnon1.herokuapp.com/user/user/password/"+id,  {
        oldPassword: userInfo.actualPass,
        newPassword: userInfo.password
      }
      ); 
      console.log("Informacion recibida" , newInfo.data);
      dispatch({
        type: CHANGE_USER_PASS,
        payload: newInfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}




export function findCreatedUser({ user, password }) {
  return async function (dispatch) {
    try {
      await axios
        .get(
          `http://localhost:3001/user/user?mail=${user}&password=${password}`
          //`https://turnon1.herokuapp.com/user/user?mail=${user}&password=${password}`
        )
        .then((resolve) => {
          dispatch({
            type: FIND_CREATED_USER,
            payload: resolve.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  };
}


export function googleLogIn (token) {
  return async function (dispatch){
    try {
      await axios
        .get(
          `http://localhost:3001/user/user/google?token=${token}`
          //`https://turnon1.herokuapp.com/user/user/google?token=${token}`
        )
        .then((resolve) => {
          dispatch({
            type:  GOOGLE_LOGIN,
            payload: resolve.data,
          });
        });
    } catch (error) {
      console.log(error);
    }
  }
}
/*
export const findCreatedUser = (email) => (dispatch) =>
  dispatch({
    type: FIND_CREATED_USER,
    payload: email,
  });
  */
export function changeMessage() {
  return async function (dispatch) {
    dispatch( {
    type: CHANGE_MESSAGE,
  });
}
}


export function getSuppliersByName(name) {
  return async function (dispatch) {
    try {
      const postUser = await axios.get("http://localhost:3001/user/court?name="+name); 
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?name="+name); 
      console.log("Cancha buscada en back",postUser.data);
      dispatch({
        type: GET_SUPPLIERS_BY_NAME,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function bestCourtsNearMe(location) {
  return {
    type: BEST_COURTS_NEAR_ME,
    payload: location,
  };
}

export function getCourtType(name) {
  return {
    type: GET_COURT_TYPE,
    payload: name,
  };
}

export function addToFavorite(data) {
  return {
    type: ADD_TO_FAVORITE,
    payload: data,
  };
}
