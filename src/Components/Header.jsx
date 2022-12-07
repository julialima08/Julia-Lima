/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: "1rem",
        left: 0,
        height: "100vw",
        width: "35px",
        zIndex: 10,
      }}
    >
      <a href="#home">
        <i className="fa-solid fa-house"></i>
      </a>
      <a href="#about">
        <i className="fa-solid fa-user"></i>
      </a>
      <a href="#portfolio">
        <i className="fa-sharp fa-solid fa-computer-classic"></i>
      </a>
      <a href="#contact">Contact</a>
      {/* <script src="https://kit.fontawesome.com/16a948ec87.js"></script> */}
    </div>
  );
};

export default Header;
