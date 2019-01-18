import React from "react";
import "./css/compare.css";

const Compare = () => {
  const compareInfo = [
    {
      name: "Expedia",
      resort: "The Crown Villas",
      location: "Puerto Plata, DR",
      duration: "7 Nights",
      occupancy: "10 Adults",
      pricing: "$17,500 + fees",
      headercolor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      bodycolor: "linear-gradient(to right, #ff416c, #ff4b2b)",
      button: "red",
      scale: { transform: "scale(1)" },
      band: "Blue band, some areas restricted"
    },
    {
      name: "Us",
      resort: "The Crown Villas",
      location: "Puerto Plata, DR",
      duration: "7 Nights",
      occupancy: "10 Adults",
      pricing: "$12,000",
      headercolor: "linear-gradient(to right, #11998e, #78ffd6)",
      bodycolor: "linear-gradient(to right, #11998e, #78ffd6)",
      button: "green",
      scale: { transform: "scale(1.1)" },
      band: "Gold Band, access to members area"
    },

    {
      name: "Hotels.com",
      resort: "The Crown Villas",
      location: "Puerto Plata, DR",
      duration: "7 Nights",
      occupancy: "10 Adults",
      pricing: "$16,933 + fees",
      headercolor: "linear-gradient(to right, #00b4db, #0083b0)",
      bodycolor: "linear-gradient(to right, #00b4db, #0083b0)",
      button: "red",
      scale: { transform: "scale(1)" },
      band: "Blue band, some areas restricted"
    }
  ];

  const cardcontent = {
    width: "100%",
    height: "100%",
    textAlign: "center",
    padding: "25px 0 0 0",
    background: "white",
    color: "black"
  };
  const margin = {
    marginBottom: "10px"
  };

  return (
    <div style={{ background: "white" }}>
      <h2
        style={{
          marginBottom: "15px",
          color: "white",
          fontSize: "2em",
          background: "black",
          padding: "10px 0",
          position: 'sticky',
          top: '85px',
          zIndex: '1',
        }}
      >
        Compare us with others!
      </h2>
      <div className="compare-container">
        {compareInfo.map(x => {
          return (
            <div
              key={x.name}
              className="compare-card-container"
              style={x.scale}
            >
              <div
                style={{
                  background: `${x.headercolor}`,
                  width: "100%",
                  height: "70px",
                  padding: "30px 0",
                  color: "white"
                }}
              >
                <h1>{x.name}</h1>
              </div>
              <div
                style={{
                  background: `${x.bodycolor}`,
                  height: "100px",
                  padding: "5px 0",
                  color: "white"
                }}
              >
                <h3>{x.resort}</h3>

                <h3>{x.location}</h3>
              </div>
              <div style={cardcontent}>
                <h5 style={margin}>All Inclusive</h5>
                <h5 style={margin}>{x.band}</h5>
                <h5 style={margin}>All Inclusive</h5>
                <h5 style={margin}>All Inclusive</h5>
                <h6 style={margin}>{x.duration} in a 5 bedroom villa</h6>
                <h6 style={margin}>Occupancy: {x.occupancy}</h6>
                <div
                  style={{
                    width: "150px",
                    height: "55px",
                    background: `${x.button}`,
                    margin: "25px auto",
                    color: "white",
                    borderRadius: "10px",
                    paddingTop: "15px"
                  }}
                >
                  <h4>{x.pricing}</h4>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Compare;
