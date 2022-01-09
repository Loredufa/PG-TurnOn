/* import "./App.css"; */
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import React from "react";
import Registro from "./Components/Registro";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
