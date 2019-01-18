import React from 'react'
import { Link } from 'react-router-dom';



const Cards = props => {
    let handleMouseOver = event => {
      event.classList.add("card-container-hover");
    };
    let handleMouseOut = event => {
      event.classList.remove("card-container-hover");
    };
    let backgroundPic = {
      backgroundImage: `url(${props.background})`,
      boxShadow: "4px 15px 22px rgba(2,2,2,.3)"
    };
    return (
      <div
        className="card-container"
        style={backgroundPic}
        onMouseEnter={event => handleMouseOver(event.target)}
        onMouseLeave={event => handleMouseOut(event.target)}
      >
        <div style={{ background: `${props.foreground}` }} className="overlay">
          <h2
            style={{
              width: "320px",
              border: "10px solid white",
              filter: "opacity(2)"
            }}
          >
            {props.name}
          </h2>
          <h4>{props.location}</h4>
          <Link to={{ pathname: `${props.link}` }}>
            <button className="card-btn">Resort Info</button>
          </Link>
        </div>
      </div>
    );
  };

  export default Cards;