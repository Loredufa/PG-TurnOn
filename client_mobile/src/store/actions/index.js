import axios from "axios";
export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_COURT = "GET_COURT";

/*
export function addUser(data) {
  return {
    type: ADD_USER,
    payload: data,
  };
}
*/

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
