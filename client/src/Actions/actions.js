export const REGISTER = "REGISTRO";


export function Register (info) {
  return {
    type: REGISTER,
    payload: info,
  };
}

