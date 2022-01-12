import axios from "axios";
export const REGISTER = "REGISTRO";
export const SET_MESSAGE_REG = "SET_MESSAGE_REG";
export const SET_MESSAGE_USER = "SET_MESSAGE_USER";
export const SET_USER = "SET_USER";
export const CHANGE_SUPPLIER_PROFILE = "CHANGE_SUPPLIER_PROFILE"

export function Register(payload) {
  return async function (dispatch) {
    try {
      const info = await axios.post(
        `http://localhost:3001/supplier/supplier`,
        payload
      );
      if (info.data.message) {
        return dispatch({
          type: SET_MESSAGE_REG,
          payload: info.data.message,
        });
      } else {
        return dispatch({
          type: REGISTER,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}

export function loginUser({ user, password }) {
  return async function (dispatch) {
    try {
      const userinfo = await axios.get(
        `http://localhost:3001/supplier/supplier?mail=${user}&password=${password}`
      );
      if (userinfo.data.message) {
        return dispatch({
          type: "SET_MESSAGE_USER",
          payload: userinfo.data.message,
        });
      } else {
        return dispatch({
          type: "SET_USER",
          payload: userinfo.data,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}


export function changeSupplierProfile ({id, info}) {
  console.log("VER LO Q DA INFO:", info)
  return async function (dispatch) {
    try{
      const updateinfo = await axios.put(`http://localhost:3001/supplier/supplier/${id}`, info)
      console.log("QUE TRAE ID",updateinfo.data)
      return dispatch({
        type: SET_USER,
        payload: updateinfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}