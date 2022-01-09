/* import "./App.css"; */
import { BrowserRouter, Route, Router, Switch } from 'react-router-dom'
import Registro from "./Components/Registro";
import Login from "./Components/Login";
import React from "react";
import Home from './Components/Home';



function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Switch>
    <Route path="/" component={Home}/>
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
