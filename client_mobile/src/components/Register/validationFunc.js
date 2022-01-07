export function validationFunc(input) {
  let errors = {};
  if (input.name.length === 0) errors.name = "SE REQUIERE NOMBRE!!";
  if (input.lastname.length === 0) errors.lastname = "SE REQUIERE APELLIDO!!";
  if (input.phone.length < 10) errors.phone = "NUMERO ERRONEO !!";
  if (input.email.length === 0) errors.email = "SE REQUIERE EMIAL!!";
  else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = "EMAIL INVALIDO!!";
  if (input.password.length === 0) errors.password = "SE REQUIERE CONTRASEÑA!!";
  else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password))
    errors.password = "CONTRASEÑA INVALIDA!!";
  return errors;
}

/*
La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos
*/
