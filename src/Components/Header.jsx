/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";
import { FaAddressBook } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaClipboardList } from "react-icons/fa";
import { RiComputerLine } from "react-icons/ri";
import { FaRegNewspaper } from "react-icons/fa";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "2rem",
        background: "rgb(112, 48, 155, 0.5)",
        padding: "1rem",
        left: 0,
        width: "3vw",
        height: "100vh",
        zIndex: 10,
      }}
    >
      <a href="#home">
        <FaHome />
      </a>
      <a href="#about">
        <FaClipboardList />
      </a>
      <a href="#portfolio">
        <RiComputerLine />
      </a>
      <a href="#resume">
        <FaRegNewspaper />
      </a>
      <a href="#contact">
        <FaAddressBook />
      </a>
      {/* <script src="https://kit.fontawesome.com/16a948ec87.js"></script> */}
    </div>
  );
};

export default Header;
