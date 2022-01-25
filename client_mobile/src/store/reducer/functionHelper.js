/*
export function findEmail(arr, email) {
  let userCreated = arr?.filter((user) => user.email === email);
  if (userCreated.length !== 0) return true;
  return false;
}
*/

export function findCourtByName(arr, name) {
  //console.log(arr?.find((court) => court.name === name));
  return arr?.find((court) => court.name === name);
}

export function bestCourts(arr, location) {
  // console.log(
  //   arr?.filter(
  //     (court) =>
  //       parseInt(court.location) - location <= 30 &&
  //       parseInt(court.rating) >= 3.8
  //   )
  // );
  return arr?.filter(
    (court) =>
      parseInt(court.location) - location <= 100 &&
      parseInt(court.rating) >= 3.8
  );
}

export function getTypes(arr, type) {
  // console.log(arr?.filter((court) => court.type === type));
  return arr?.filter((court) => court.type === type);
}

export function rutas(arr) {
  let latitude = "";
  let longitude = "";
  let sport = [];
  let newArr = arr?.map((e) => {
    latitude = parseFloat(e.coordinates?.split(" ")[0]);
    longitude = parseFloat(e.coordinates?.split(" ")[1]);
    sport = e.fields.map((element) => element.sport);
    return {
      latitude: latitude,
      longitude: longitude,
      title: e.businessname,
      id: e.id,
      sport: sport,
      description: e.address,
      phone: e.phone,
    };
  });
  return newArr;
}
