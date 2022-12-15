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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2 id="title">resume</h2>
        <a target="_blank" href="https://ucarecdn.com/0c6febfa-4dcd-4ff2-bcac-79748f1ef84c/">
          <button>View Resume</button>
          </a>
        <img src="https://ucarecdn.com/222461c2-26ac-4c38-881b-163a9e5c86ba/" alt="blah"></img>
      </div>
    </div>
  );
};

export default Resume;
