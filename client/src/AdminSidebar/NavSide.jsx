import "./NavBar.css";

import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";

import React, { useState } from "react";

import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { SidebarData } from "./SideBarData";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

function NavSide() {
  const [sidebar, setSidebar] = useState(false);
  const history = useHistory();
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <DivGlobal>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
            <DivButtons>
              <Button2
                onClick={() => {
                  history.push("/panel");
                }}
              >
                Panel Home
              </Button2>
              <Button
                onClick={() => {
                  window.localStorage.removeItem("loguodeusuario");
                  window.localStorage.removeItem("access");
                  history.push("/");
                  window.location.reload(false);
                }}
              >
                Logout
              </Button>
            </DivButtons>
          </ul>
        </nav>
      </IconContext.Provider>
    </DivGlobal>
  );
}

const DivGlobal = styled.div`
  position: relative;
  z-index: 3;
  img {
    margin-left: 500px;
    width: 70px;
    color: white;
    background-color: white;
  }
`;
const DivButtons = styled.div`
  margin-right: 2.8rem;
  margin-top: 25rem;
  height: 50px;
  transition: all 0.05s linear;
  font-family: inherit;
  @media (max-height: 874px) {
    float: left;
    margin-top: 23rem;
  }
  @media (max-height: 816px) {
    float: left;
    margin-top: 21rem;
  }
  @media (max-height: 791px) {
    float: left;
    margin-top: 18rem;
  }
`;

const Button2 = styled.button`
  width: 140px;
  height: 45px;
  font-size: 23px;
  cursor: pointer;
 margin-top: 1rem;
 margin-left: 3rem;
 font-size: 12px;
 text-transform: uppercase;
 letter-spacing: 2.5px;
 font-weight: 500;
 color: #000;
 background-color: #fff;
 border: none;
 border-radius: 45px;
 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease 0s;
 cursor: pointer;
 outline: none;
 &:hover {
 background-color: #81b214;
 box-shadow: 0px 15px 20px rgba(114, 214, 2, 0.4);
 color: #fff;
 transform: translateY(-7px);
}

&:active {
 transform: translateY(-1px);
}
  }
`;
const Button = styled.button`
 padding: 1.3em 3em;
 margin-left: 3rem;
 margin-top: 3rem;
 font-size: 12px;
 text-transform: uppercase;
 letter-spacing: 2.5px;
 font-weight: 500;
 color: #000;
 background-color: #fff;
 border: none;
 border-radius: 45px;
 box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
 transition: all 0.3s ease 0s;
 cursor: pointer;
 outline: none;
 &:hover {
 background-color: #81b214;
 box-shadow: 0px 15px 20px rgba(114, 214, 2, 0.4);
 color: #fff;
 transform: translateY(-7px);
}

&:active {
 transform: translateY(-1px);
}
}
`;

export default NavSide;
