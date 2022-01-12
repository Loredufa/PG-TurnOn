/*
export function findEmail(arr, email) {
  let userCreated = arr?.filter((user) => user.email === email);
  if (userCreated.length !== 0) return true;
  return false;
}
*/

export function findCourtByName(arr, name) {
  console.log(arr?.find((court) => court.name === name));
  return arr?.find((court) => court.name === name);
}

export function bestCourts(arr, location) {
  console.log(
    arr?.filter(
      (court) =>
        parseInt(court.location) - location <= 30 &&
        parseInt(court.rating) >= 3.8
    )
  );
  return arr?.filter(
    (court) =>
      parseInt(court.location) - location <= 100 &&
      parseInt(court.rating) >= 3.8
  );
}

export function getTypes(arr, type) {
  console.log(arr?.filter((court) => court.type === type));
  return arr?.filter((court) => court.type === type);
}
