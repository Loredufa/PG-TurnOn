export function findEmail(arr, email) {
  let userCreated = arr?.filter((user) => user.email === email);
  if (userCreated.length !== 0) return true;
  return false;
}

export function findCourtByName(arr, name) {
  console.log(arr?.find((court) => court.name === name));
  return arr?.find((court) => court.name === name);
}
