import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import CourtCreation from "./Components/CourtCreation";
import { CourtProvider } from "../src/Components/Court/Context/CourtContext";
import History from "./Components/History";
import Home from "./Components/Home";
import Login from "./Components/Login";
import NavSide from "../src/AdminSidebar/NavSide";
import Navbar from "./Components/Navbar";
import Panel from "./AdminTable/Tablas/Panel";
import React from "react";
import Registro from "./Components/Registro";
import Settings from "./Components/Settings";
import Supplier from "./AdminTable/Tablas/Supplier";
import UpdatePassword from "./Components/UpdatePassword";
import User from "./AdminTable/Tablas/User";
import { useSelector } from "react-redux";
import Beginning from "./Components/Beginning";

function App() {
  const { user } = useSelector((state) => state);
  return (
    <div className="App">
      <BrowserRouter>
        {user && user.supplier.access === "admin" ? <NavSide /> : <Navbar />}
        <Switch>
          <Route
            exact
            path="/panel/user"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <User />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/panel/suppliers"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Supplier />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route
            exact
            path="/panel"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Panel />
              ) : (
                <Redirect to="/" />
              )
            }
          />
          <Route exact path="/registro" component={Registro} />
          <Route
            exact
            path="/login"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <Login />
              )
            }
          />
          <Route
            path="/profile/settings"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <Settings />
              )
            }
          />
               <Route
            path="/profile/guia"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <Beginning />
              )
            }
          />
          <Route
            path="/profile/history"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <History />
              )
            }
          />
          <Route
            path="/profile/courts/create"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <CourtCreation />
              )
            }
          />
          <Route
            path="/profile/courts"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <CourtProvider />
              )
            }
          />
          <Route
            path="/profile/password"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <UpdatePassword />
              )
            }
          />
          <Route
            exact
            path="/"
            component={() =>
              user && user.supplier.access === "admin" ? (
                <Redirect to="/panel" />
              ) : (
                <Home />
              )
            }
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
