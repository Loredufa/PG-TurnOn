import axios from "axios";
export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_COURT = "GET_COURT";
export const CLOSE_SESSION = "CLOSE_SESSION";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";
export const BEST_COURTS_NEAR_ME = "BEST_COURTS_NEAR_ME";
export const GET_COURT_TYPE = "GET_COURT_TYPE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const BOOK_COURT = "BOOK_COURT";
export const SET_SCREEN_DIMENSIONS = "SET_SCREEN_DIMENSIONS";
export const GET_COURT_BY_SPORT = "GET_COURT_BY_SPORT";

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


export function setScreenDimensions (screenWidth, numColumns, titleSize){
  return function (dispatch) {
    dispatch({
      type: SET_SCREEN_DIMENSIONS,
      payload: {screenWidth, numColumns, titleSize}
    });
  };  
}

export function bookCourt (court) {
  return function (dispatch) {
    dispatch({
      type: BOOK_COURT,
      payload: court,
    });
  };
}
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

export function findCreatedUser({ user, password }) {
  return async function (dispatch) {
    try {
      await axios
        .get(
          `http://localhost:3001/user/user?mail=${user}&password=${password}`
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

/*
export const findCreatedUser = (email) => (dispatch) =>
  dispatch({
    type: FIND_CREATED_USER,
    payload: email,
  });
  */
export function getCourt(name) {
  return {
    type: GET_COURT,
    payload: name,
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
