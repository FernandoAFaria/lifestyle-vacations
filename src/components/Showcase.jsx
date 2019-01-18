import React from "react";
import logo2 from "../img/landingPageImg.jpg";
import { Link } from "react-router-dom";
import "../components/css/resorts.css";
import Compare from "./Compare";
import Cards from "./Cards";
import Contact from "./Contact";
/*Scroll Reveal */

/*IMPORT RESORT PICTURES HERE */
import confback from "../img/Confresi Palm Beach/confback.jpg";
import presback from "../img/Presedential Suites/presback.jpg";
import royalback from "../img/Royal Suites/royalback.jpg";
import crownback from "../img/The Crown Villas/crownback.jpg";
import tropicalback from "../img/The Tropical/trop5.jpg";
import dreamsuitesback from "../img/Dream Suites/dreamsuitesback.jpg";
import dreamsuitespunta from "../img/deramsuites punta cana/dreamsuitespunta.jpg";
import pressuitespunta from "../img/pres suites punta cana/pressuitespunta.jpg";
import allritmoback from "../img/All Ritmo/allritmoback.jpg";

const fetch = require("isomorphic-fetch");

/*RESORT INFORMATION BELOW */
const resortInfo = [
  {
    name: "The Tropical",
    location: "Puerto Plata, DR",
    foreground: "darkgreen",
    background: tropicalback,
    link: "tropical"
  },
  {
    name: "Confresi Resort and Spa",
    location: "Puerto Plata, DR",
    foreground: "red",
    background: confback,
    link: "confresi"
  },
  {
    name: "Presidential Suite",
    location: "Puerto Plata, DR",
    foreground: "blue",
    background: presback,
    link: "presidential"
  },
  {
    name: "The Royal Suites",
    location: "Puerto Plata, DR",
    foreground: "purple",
    background: royalback,
    link: "royalsuites"
  },
  {
    name: "Dream Suites by Lifestyle",
    location: "Puerto Plata, DR",
    foreground: "coral",
    background: dreamsuitesback,
    link: "dreamsuites"
  },

  {
    name: "The Crown Villas",
    location: "Puerto Plata, DR",
    foreground: "black",
    background: crownback,
    link: "crownvillas"
  },
  {
    name: "Dream Suites by Lifestyle",
    location: "Punta Cana, DR",
    foreground: "darkcyan",
    background: dreamsuitespunta,
    link: "dreamsuitespuntacana"
  },
  {
    name: "Presidential Suites",
    location: "Punta Cana, DR",
    foreground: "darkgoldenrod",
    background: pressuitespunta,
    link: "pressuitespuntacana"
  },
  {
    name: "All Ritmo",
    location: "Cancun, Mexico",
    foreground: "darkslateblue",
    background: allritmoback,
    link: "AllRitmo"
  }
];

/* MODULES BELOW - CARDS, SHOWCASE, AND RESORT*/

export const Resorts = () => {
  const resortsStyle = {
    display: "flex",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
    flexWrap: "wrap",
    padding: "25px 0"
  };
  return (
    <section
      style={{
        marginTop: "50px",
        padding: "50px 0 50px 0",
        textAlign: "center",
        color: "rgb(30,30,30)"
      }}
    >
      <h1
        style={{
          fontSize: "2rem",
          marginBottom: "120px",
          background: "black",
          color: "white",
          padding: "10px 0",
          position: 'sticky',
          top: '85px',
          zIndex: '1'
        }}
      >
        Please browse avaliable resorts below.
      </h1>
      <div style={resortsStyle} id="resorts">
        {resortInfo.map((x, index) => {
          return (
            <Cards
              key={index}
              name={x.name}
              foreground={x.foreground}
              background={x.background}
              location={x.location}
              link={x.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export const Showcase = () => {
  const showcaseImg = {
    width: "99.1vw",
    maxHeight: "900px",
    margin: "0 auto",
    padding: "0"
    // transform: 'translatey(-25px)',
  };
  const showcase = {
    position: "relative",
    // marginTop: '25px',
    textAlign: "center",
    zIndex: "1",
    paddingTop: "85px",
    color: "white",
    background: "white"
  };
  const body = {
    padding: "100px 15% 150px 15%",
    lineHeight: "1.6",
    fontSize: "1.2em",
    marginTop: "-4px",
    background: "",
    color: "rgb(15,15,15)"
  };

  return (
    <div className="container">
      <div style={showcase}>
        <img
          src={logo2}
          alt="Lifestyle Vacations Club Logo"
          style={showcaseImg}
        />

        <div style={body}>
          <h2>Let us help you save hundreds on your next Vacation!</h2>

          <p
            style={{
              marginTop: "65px",
              textAlign: "justify",
              color: "rgb(25,25,25)"
            }}
          >
            It's easy! Choose your next destination below. Fill out an inquiry.
            We will find the best possible deal and get back to you in email
            within 24 hours. You can then compare our pricing with others and
            see where you are getting the best deal. You will then be sent a
            link good for 48 hours so that you may book your trip! Remember,
            pricing is only good for 48 hours so remember to check your email
            often. Who wouldn't want more cash to spend while your ON vacation?
          </p>
        </div>

        <Compare />

        <Resorts />
      </div>
      <Contact />
    </div>
  );
};
