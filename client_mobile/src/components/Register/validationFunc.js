export function validationFunc(input) {
  let errors = {};
  if (input.name.length === 0) errors.name = "Se requiere Nombre";
  if (input.lastname.length === 0) errors.lastname = "Se requiere Apellido";
  if (input.phone.length < 10) errors.phone = "Se requiere numero de Telefono";
  if (input.email.length === 0) errors.email = "Se requiere un Mail";
  else if (!/\S+@\S+\.\S+/.test(input.email)) errors.email = "Mail invalido";
  if (input.password.length === 0) errors.password = "Se requiere Contraseña";
  else if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.password))
    errors.password =
      "Entre 8 y 16 caracteres, debe incluir(Mayusculas, Minusculas, Números)";
  if (input.password !== input.repassword)
    errors.repassword = "La contraseña no coincide";
  else if (
    !/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(input.repassword)
  )
    errors.repassword = "Se requiere Contraseña";
  return errors;
}

/*
La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. Puede tener otros símbolos
*/
