export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_COURT = "GET_COURT";

export function addUser(data) {
  return {
    type: ADD_USER,
    payload: data,
  };
}
export const findCreatedUser = (email) => (dispatch) =>
  dispatch({
    type: FIND_CREATED_USER,
    payload: email,
  });
export function getCourt(name) {
  return {
    type: GET_COURT,
    payload: name,
  };
}
