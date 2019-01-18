import React from "react";
import "./css/nav.css";
import { Link } from "react-router-dom";
import logo from "../img/lifestyleVacationsNav.png";

class Nav extends React.Component {
  render() {
    const showMenu = () => {
      const sideMenu = document.getElementsByClassName("hiddenmenu")[0];
      const sideCloseButton = document.getElementsByClassName("close-menu")[0];
      sideMenu.classList.remove("hidden");
      sideMenu.classList.add("show");
      sideCloseButton.classList.remove("hidden");
      sideCloseButton.classList.add("visible");
    };

    const hideMenu = () => {
      const sideMenu = document.getElementsByClassName("hiddenmenu")[0];
      const sideCloseButton = document.getElementsByClassName("close-menu")[0];
      sideMenu.classList.remove("show");
      sideMenu.classList.add("hidden");
      sideCloseButton.classList.remove("visible");
      sideCloseButton.classList.add("hidden");
    };

    const navline = {
      paddingTop: "5px",
      height: "1px",
      borderBottom: "3px solid white",
      width: "33px",
      marginBottom: "1px"
    };
    const navlineTop = {
        marginTop: '10px',
        paddingTop: "5px",
        height: "1px",
        borderBottom: "3px solid white",
        width: "33px",
        marginBottom: "1px"
      };
    const navbar = {
      top: "0",
      position: "fixed",
      width: "100%",
      height: "85px",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      zIndex: "99",
      paddingRight: "25px",
      paddingTop: "15px",
      background: "#e96151" ,
      boxShadow: '3px 5px 3px rgba(44,44,44,.25)'
    };
    const menu = {
      cursor: "pointer",
      display: "inline",
      position: "fixed"
    };
   

    return (
      <nav style={navbar}>
        <div
          style={{
            alignSelf: "center",
            display: "inline-block",
            position: "absolute"
          }}
        >
        <h1 className='mobile-text'>LifeStyle Vacations</h1>
          <img src={logo}
            className="navLogo"
            alt="caribbean vacation provider"
          />
        </div>
        <div className="menu" style={menu} onClick={showMenu}>
          <div style={navlineTop} />
          <div style={navline} />
          <div style={navline} />
        </div>

        <div className="hiddenmenu hidden">
          <div className="close-menu hidden" onClick={hideMenu}>
            x
          </div>

          <h2 style={{ display: "inline-block" }}>MENU</h2>
          <ul>
            <Link to="/" onClick={hideMenu} style={{ textDecoration: "none" }}>
              <li>HOME</li>
            </Link>
            <Link
              to="/resorts"
              onClick={hideMenu}
              style={{ textDecoration: "none" }}
            >
              <li>RESORTS</li>
            </Link>
            <a href="/#contact" onClick={hideMenu}>
              <li>CONTACT US</li>
            </a>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
