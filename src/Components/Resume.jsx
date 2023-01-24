import image from "../images/gray.webp";
import React from "react";
const imageAltText = "purple and blue abstract background";

const Resume = () => {
  return (
    <div className="light" id="resume">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "#b57d6d",
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
          opacity: ".7",
        }}
      >
        <h2 id="title">resume</h2>
        <a target="_blank" href="https://ucarecdn.com/0c6febfa-4dcd-4ff2-bcac-79748f1ef84c/">
          <button>View Resume</button>
          </a>
        <img src="https://ucarecdn.com/29042681-bc91-4cb2-a65f-638978fc6ba0/" alt="blah"></img>
        <img src="https://ucarecdn.com/fb389779-16b5-49f3-b553-ff732da7b7ec/" alt="blah"></img>
      </div>
    </div>
  );
};

export default Resume;
