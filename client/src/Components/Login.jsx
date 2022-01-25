import "../Css/login.css";

import { Link, useHistory } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../Actions/actions";

function Login() {
  const dispatch = useDispatch();
  const { user, message } = useSelector((state) => state);
  const history = useHistory();
  const [input, setInput] = useState({
    user: " ",
    password: " ",
  });

  if (user) {
    history.push("/");
  }

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(input));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="divPrincipal">
        <div className="subdivPrincipal">
          <div className="elementos">
            <div className="ingresar">
              <h1>INGRESAR</h1>
            </div>
            <div className="divLabels">
              <div className="divLabel1">
                <input
                  className="input"
                  type="text"
                  id="user"
                  name="user"
                  placeholder="username"
                  values={input.user}
                  onChange={handleChange}
                />
                {}
                <div className="divLabel2">
                  <input
                    className="input2"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    values={input.password}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <button className="boton" type="submit">
                Login
              </button>
              <p className="mensaje-error">{message}</p>
            </div>
            <h4 className="no-estas-registrado">¿No estas Registrado?</h4>
            <Link to="/registro">
              <h4 className="registrate">Registrate</h4>
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Login;
