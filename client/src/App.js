/* import "./App.css"; */
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CourtCreation from "./Components/CourtCreation";
import { CourtProvider } from "../src/Components/Court/Context/CourtContext";
import History from "./Components/History";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import React from "react";
import Registro from "./Components/Registro";
import Settings from "./Components/Settings";
import UpdatePassword from "./Components/UpdatePassword";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/login" component={Login} />
          <Route path="/profile/settings" component={Settings} />
          <Route path="/profile/history" component={History} />
          <Route path="/profile/courts/create" component={CourtCreation} />
          <Route path="/profile/courts" component={CourtProvider} />
          <Route path="/profile/password" component={UpdatePassword} />
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
