/* import "./App.css"; */
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Login from "./Components/Login";
import React from "react";
import Registro from "./Components/Registro";
import Navbar from "./Components/Navbar"
import Settings from "./Components/Settings"
import History from "./Components/History";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile/settings" component={Settings} />
          <Route path="/profile/history" component={History} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
