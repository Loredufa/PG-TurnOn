export function findEmail(arr, email) {
  let userCreated = arr?.filter((user) => user.email === email);
  if (userCreated.length !== 0) return true;
  return false;
}
