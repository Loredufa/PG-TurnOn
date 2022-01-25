import axios from "axios";
export const ADD_USER = "ADD_USER";
export const FIND_CREATED_USER = "FIND_CREATED_USER";
export const GET_SUPPLIERS_BY_NAME = "GET_SUPPLIERS_BY_NAME";
export const CLOSE_SESSION = "CLOSE_SESSION";
export const CHANGE_USER_INFO = "CHANGE_USER_INFO";
export const BEST_COURTS_NEAR_ME = "BEST_COURTS_NEAR_ME";
export const GET_COURT_TYPE = "GET_COURT_TYPE";
export const ADD_TO_FAVORITE = "ADD_TO_FAVORITE";
export const GET_FAVORITES = "GET_FAVORITES";
export const DELETE_FROM_FAVORITE = "DELETE_FROM_FAVORITE";
export const BOOK_COURT = "BOOK_COURT";
export const SET_SCREEN_DIMENSIONS = "SET_SCREEN_DIMENSIONS";
export const GET_COURT_BY_SPORT = "GET_COURT_BY_SPORT";
export const CHANGE_USER_PASS = "CHANGE_USER_PASS";
export const CHANGE_MESSAGE = "CHANGE_MESSAGE";
export const GOOGLE_LOGIN = "GOOGLE_LOGIN";
export const GET_SUPPLIER_BY_SPORT = "GET_SUPPLIER_BY_SPORT";
export const GET_COURTS_SUPPLIER_SPORT = "GET_COURTS_SUPPLIER_SPORT";
export const GET_BOOKINGS = "GET_BOOKINGS";
export const EDIT_BOOKING = "EDIT_BOOKING";
export const DELETE_BOOKING = "DELETE_BOOKING";
export const DELETE_USER = "DELETE_USER";
export const GET_COURTS_SUPPLIER = "GET_COURTS_SUPPLIER";
export const GET_ALL_SUPPLIERS = "GET_ALL_SUPPLIERS";
export const GET_SUPPLIER_LOCATION = "GET_SUPPLIER_LOCATION";
export const MP_BOOKING_DETAIL = "MP_BOOKING_DETAIL";
export const COURT_AVAILABILITY = "COURT_AVAILABILITY";
export const FIND_PAYMENT = "FIND_PAYMENT";
export const SET_MESSAGE = "SET_MESSAGE";
export const RATE_SUPPLIER = "RATE_SUPPLIER";
export const GET_GEO_LOCATION = "GET_GEO_LOCATION";
export const GET_SUPPLIER_BY_LOCATION_RATING =
  "GET_SUPPLIER_BY_LOCATION_RATING";
export const GET_COMPLETED_BOOKINGS = "GET_COMPLETED_BOOKINGS";
export const GET_VOUCHERS = "GET_VOUCHERS";
export const CHANGE_BOOKING_RATED = "CHANGE_BOOKING_RATED";

//const URL = "http://localhost:3001/";
const URL = "https://turnon1.herokuapp.com/";

export function rateSupplier(supplierId, rating, bookingId) {
  return async function (dispatch) {
    console.log("LA URL CON LA QUE DESPACHO:" , URL + "supplier/rating/" + supplierId, "los que van en body", rating,
    bookingId,)
    try {
      const response = await axios.put(URL + "supplier/rating/" + supplierId, {
        number: rating,
        bookingId,
      });
      console.log("LA RESPUESTA CUANDO HAGO EL RATING" , response.data)
      // dispatch({
      //   type: RATE_SUPPLIER,
      //   payload: response.data,
      // });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllSuppliers() {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/supplier");
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/supplier");
      const getSuppliers = await axios.get(URL + "user/supplier");
      //console.log("SUPPLIERS", getSuppliers.data);
      dispatch({
        type: GET_ALL_SUPPLIERS,
        payload: getSuppliers.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCourtBySport(sport) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?sport="+sport);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?sport="+sport);
      const postUser = await axios.get(URL + "user/court?sport=" + sport);
      // console.log(postUser.data);
      dispatch({
        type: GET_COURT_BY_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCourtBySportSupplier(name, sport) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?sport="+sport+ "&name=" + name);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?sport="+sport+ "&name=" + name);
      const postUser = await axios.get(
        URL + "user/court?sport=" + sport + "&name=" + name
      );
      //console.log("Cancha buscada en back", postUser.data);
      dispatch({
        type: GET_COURTS_SUPPLIER_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getCourtsBySupplier(name) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?sport="+sport+ "&name=" + name);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/court?name=" + name);
      const postUser = await axios.get(URL + "user/court?name=" + name);
      // console.log("Cancha buscada en back", postUser.data);
      dispatch({
        type: GET_COURTS_SUPPLIER,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSupplierBySport(sport) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/supplier?sport="+sport );
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/supplier?sport=" + sport);
      const postUser = await axios.get(URL + "user/supplier?sport=" + sport);
      //console.log(postUser.data);
      dispatch({
        type: GET_SUPPLIER_BY_SPORT,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setScreenDimensions(screenWidth, numColumns, titleSize) {
  return function (dispatch) {
    dispatch({
      type: SET_SCREEN_DIMENSIONS,
      payload: { screenWidth, numColumns, titleSize },
    });
  };
}

export function MPbookingDetails(
  amount,
  idCourt,
  idUser,
  idSupplier,
  courtName,
  reservationCode
) {
  return async function (dispatch) {
    try {
      const state = "active";
      amount = Math.round(amount.split("$")[1] / 10);
      /*console.log(
        `${URL}user/mercadopago?amount=${amount}&idCourt=${idCourt}&idUser=${idUser}&idSupplier=${idSupplier}&reservationCode=${reservationCode}&state=${state}&courtName=${courtName}`
      );*/
      /*console.log(
        amount,
        " ",
        idCourt,
        " ",
        idUser,
        " ",
        idSupplier,
        " ",
        courtName,
        " ",
        state,
        " ",
        reservationCode
      );*/
      const url = await axios.get(
        `${URL}user/mercadopago?amount=${amount}&idCourt=${idCourt}&idUser=${idUser}&idSupplier=${idSupplier}&reservationCode=${reservationCode}&state=${state}&courtName=${courtName}`
      );
      // console.log("URL", url.data);
      dispatch({
        type: MP_BOOKING_DETAIL,
        payload: url.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function findPayment(idSupplier) {
  return async function (dispatch) {
    try {
      const payments = await axios.get(
        URL + "supplier/payments?idSupplier=" + idSupplier
      );
      /*console.log(
        "URL de la peticion:",
        URL + "supplier/payments?idSupplier=" + idSupplier
      );
      console.log("La respuesta de los payments", payments.data);*/
      dispatch({
        type: FIND_PAYMENT,
        payload: payments.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function bookCourt(
  courtId,
  userId,
  day,
  date,
  bookingCode,
  timeSelected,
  supplierId,
  paymentId
) {
  return async function (dispatch) {
    try {
      // console.log("La fecha seleccionada es: ", date);
      timeSelected = timeSelected.split("-");
      //const postUser = await axios.post("http://localhost:3001/user/bookings", {
      //const postUser = await axios.post("https://turnon1.herokuapp.com/user/bookings", {
      let postUser = "";
      if (bookingCode === "0000") {
        postUser = await axios.post(URL + "user/bookings", {
          courtId,
          date,
          day,
          initialTime: timeSelected[0],
          endingTime: timeSelected[1],
          bookingCode,
          status: "voucher",
          userId,
          supplierId,
          paymentId,
        });
      } else {
        postUser = await axios.post(URL + "user/bookings", {
          courtId,
          date,
          day,
          initialTime: timeSelected[0],
          endingTime: timeSelected[1],
          bookingCode,
          status: "active",
          userId,
          supplierId,
        });
      }
      // console.log("La respuesta del post", postUser.data);
      // console.log("BOOKINGCODE :", bookingCode);
      dispatch({
        type: BOOK_COURT,
        payload: bookingCode !== "0000" ? postUser.data : "",
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function setMessage(message) {
  return async function (dispatch) {
    dispatch({
      type: SET_MESSAGE,
      payload: message ? { message } : { message: "El pago de la seña fallo" },
    });
  };
}

export function courtAvailability(idCourt, date, day) {
  return async function (dispatch) {
    try {
      const availables = await axios.get(
        `${URL}user/available?idCourt=${idCourt}&date=${date}&day=${day}`
      );
      // console.log("Las disponibles", availables.data);
      dispatch({
        type: COURT_AVAILABILITY,
        payload: availables.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBookings(userId, active) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/bookings/"+userId);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/bookings/"+userId)
      let postUser = "";
      if (active) {
        postUser = await axios.get(
          URL + "user/bookings/" + userId + "?active=" + true
        );
      } else {
        postUser = await axios.get(URL + "user/bookings/" + userId);
      }
      console.log("La respuesta del GET BOOKINGS es ", postUser.data);
      dispatch({
        type: GET_BOOKINGS,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCompletedBookings(userId, completed) {
  return async function (dispatch) {
    try {
      let postUser = await axios.get(
        URL + "user/bookings/" + userId + "?completed=" + true
      );
      dispatch({
        type: GET_COMPLETED_BOOKINGS,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}


export function getVouchers(userId ,  voucher , courtId, ) {
  return async function (dispatch) {
    try {
      let postUser = await axios.get(URL + "user/bookings/" + userId + '?voucher=' + true + "&courtId=" + courtId);
      console.log("LOS VOUCHERS" , postUser.data)
      dispatch({
        type: GET_VOUCHERS,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteBooking(bookingId) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/bookings/"+userId);
      //const postUser = await axios.delete("https://turnon1.herokuapp.com/user/bookings/"+bookingId)
      const postUser = await axios.delete(URL + "user/bookings/" + bookingId);
      //console.log("La data que esta devolviendo es", postUser.data);
      dispatch({
        type: DELETE_BOOKING,
        payload: postUser.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeBookingRated(bookingId) {
  return async function (dispatch) {
    let change = await axios.put(URL + "user/bookings/" + bookingId, {
      rated: true,
    });
    dispatch({
      type: CHANGE_BOOKING_RATED,
      payload: change.data,
    });
  }
}

export function changeBooking(bookingId, date, timeSelected, status) {
  return async function (dispatch) {
    try {
      let change = "";
      if (status === "canceled") {
        timeSelected = timeSelected.split("-");
        change = await axios.put(URL + "user/bookings/" + bookingId, {
          date: date,
          initialTime: timeSelected[0],
          endingTime: timeSelected[1],
          status: status,
        });
        //console.log("LO QUE DEVUELVE CUANDO LA CANCELAS" , change.data);
      } else {
        let dateArr = date.split("-");
        var d = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);
        d = d.getDay();
        var daysOfWeek = [
          "Domingo",
          "Lunes",
          "Martes",
          "Miercoles",
          "Jueves",
          "Viernes",
          "Sabado",
        ];
        let day = daysOfWeek[d];
        timeSelected = timeSelected.split("-");
        change = await axios.put(URL + "user/bookings/" + bookingId, {
          date: dateArr.join("/"),
          day,
          initialTime: timeSelected[0],
          endingTime: timeSelected[1],
        });
        //console.log("La data que esta devolviendo es", change.data);
      }
      dispatch({
        type: EDIT_BOOKING,
        payload: change.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function closeSession() {
  return function (dispatch) {
    dispatch({
      type: CLOSE_SESSION,
    });
  };
}
export function deleteUser(userId) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.post("http://localhost:3001/user/user", {
      //const message = await axios.delete("https://turnon1.herokuapp.com/user/user/" + userId);
      const message = await axios.delete(URL + "user/user/" + userId);
      // console.log("El mensaje al eliminar", message.data);
      dispatch({
        type: DELETE_USER,
        payload: message.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function addUser({ name, lastname, phone, email, password }) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.post("http://localhost:3001/user/user", {
      //const postUser = await axios.post("https://turnon1.herokuapp.com/user/user", {
      const postUser = await axios.post(URL + "user/user", {
        name,
        lastname,
        phone,
        mail: email,
        password,
      });
      //console.log("REGISTRO", name, lastname, phone, email, password);
      return postUser;
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeUserInfo(id, userInfo) {
  return async function (dispatch) {
    try {
      //const newInfo = await axios.put("http://localhost:3001/user/user/"+id,
      //const newInfo = await axios.put("https://turnon1.herokuapp.com/user/user/"+id,
      const newInfo = await axios.put(URL + "user/user/" + id, userInfo);
      //console.log("Informacion recibida", newInfo.data);
      dispatch({
        type: CHANGE_USER_INFO,
        payload: newInfo.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function changeUserPass(id, userInfo) {
  return async function (dispatch) {
    try {
      //const newInfo = await axios.put("http://localhost:3001/user/user/password/"+id,  {
      //const newInfo = await axios.put("https://turnon1.herokuapp.com/user/user/password/"+id,  {
      const newInfo = await axios.put(URL + "user/user/password/" + id, {
        oldPassword: userInfo.actualPass,
        newPassword: userInfo.password,
      });
      //console.log("Informacion recibida", newInfo.data);
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
    //console.log("voy a despachar", user, password);
    try {
      await axios
        .get(
          //`http://localhost:3001/user/user?mail=${user}&password=${password}`
          //`https://turnon1.herokuapp.com/user/user?mail=${user}&password=${password}`
          `${URL}user/user?mail=${user}&password=${password}`
        )
        .then((resolve) => {
          //console.log(resolve.data);
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

export function googleLogIn(token) {
  return async function (dispatch) {
    try {
      await axios
        .get(
          //`http://localhost:3001/user/user/google?token=${token}`
          //`https://turnon1.herokuapp.com/user/user/google?token=${token}`
          `${URL}user/user/google?token=${token}`
        )
        .then((resolve) => {
          dispatch({
            type: GOOGLE_LOGIN,
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
export function changeMessage() {
  return async function (dispatch) {
    dispatch({
      type: CHANGE_MESSAGE,
    });
  };
}

export function getSuppliersByName(name, sport) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?name="+name);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/supplier?name="+name);
      let postUser = "";
      if (sport)
        postUser = await axios.get(
          URL + "user/supplier?name=" + name + "&sport=" + sport
        );
      else postUser = await axios.get(URL + "user/supplier?name=" + name);
      //console.log("Supplier", postUser.data);
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

export function addToFavorite(/*data*/ supplierId, userId) {
  /*return {
    type: ADD_TO_FAVORITE,
    payload: data,
  }; */

  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?name="+name);
      //const favs = await axios.put("https://turnon1.herokuapp.com/user/favorites" , {
      const favs = await axios.put(URL + "user/favorites", {
        supplierId,
        userId,
      });
      dispatch({
        type: ADD_TO_FAVORITE,
        payload: favs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteFromFavorite(supplierId, userId) {
  return async function (dispatch) {
    try {
      const favs = await axios.delete(URL + "user/favorites", {
        data: {
          supplierId,
          userId,
        },
      });
      dispatch({
        type: DELETE_FROM_FAVORITE,
        payload: favs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getFavorites(userId, name) {
  return async function (dispatch) {
    try {
      let favs = "";
      if (name)
        favs = await axios.get(
          URL + "user/favorites?userId=" + userId + "&name=" + name
        );
      else favs = await axios.get(URL + "user/favorites?userId=" + userId);
      dispatch({
        type: GET_FAVORITES,
        payload: favs.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getSupplierLocation() {
  return {
    type: GET_SUPPLIER_LOCATION,
  };
}

export function getGeoLocation(data) {
  //console.log("DATA LOCATION", data);
  return {
    type: GET_GEO_LOCATION,
    payload: data,
  };
}

export function getSupplierByLocationRating(latitude, longitude) {
  return async function (dispatch) {
    try {
      //const postUser = await axios.get("http://localhost:3001/user/court?name="+name);
      //const postUser = await axios.get("https://turnon1.herokuapp.com/user/supplier?name="+name);

      let getSupplier = await axios.get(
        URL + "user/supplier?latitude=" + latitude + "&longitude=" + longitude
      );
      //console.log("Supplier", postUser.data);
      dispatch({
        type: GET_SUPPLIER_BY_LOCATION_RATING,
        payload: getSupplier.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
