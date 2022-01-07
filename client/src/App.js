import "./App.css";

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Registro from "./Components/Registro";
import Login from "./Components/Login";
import React from "react";


function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Switch>
    <Route exact path='/registro' component={Registro}/>
    <Route exact path="/login">
            <Login />
          </Route>

    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
