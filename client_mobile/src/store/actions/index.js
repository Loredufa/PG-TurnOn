import axios from "axios";
export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_COURT = "GET_COURT";
export const CLOSE_SESSION = "CLOSE_SESSION";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";
export const BEST_COURTS_NEAR_ME = "BEST_COURTS_NEAR_ME";
export const GET_COURT_TYPE = "GET_COURT_TYPE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";

/*
export function addUser(data) {
  return {
    type: ADD_USER,
    payload: data,
  };
}
*/

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

export function changeUserInfo(newInfo) {
  return async function (dispatch) {
    dispatch({
      type: CHANGE_USER_INFO,
      payload: newInfo,
    });
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
