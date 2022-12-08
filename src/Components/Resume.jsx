import image from "../images/moving.gif";
import React from "react";
const imageAltText = "purple and blue abstract background";

const Resume = () => {
  return (
    <div className="light" id="resume">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#2b2b2b",
          width: "65vw",
          padding: "4rem",
          margin: "2rem auto",
          textAlign: "center",
          borderRadius: "25px",
          mozBoxShadow: "0 0 20px #2b2b2b",
          webkitBoxShadow: "0 0 20px #2b2b2b",
          boxShadow: "0 0 20px #2b2b2b",
        }}
      >
        <h2 id="title">resume</h2>
      </div>
    </div>
  );
};

export default Resume;
