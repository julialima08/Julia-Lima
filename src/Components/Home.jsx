/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use Then, set imageAltText to string that
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/keyboard.jpg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import headshot from "../images/headshot.jpeg";

const imageAltText = "woman holding laptop standing by server room with glass wall";

const Home = ({ title, name, gitHub, email, linkedIn }) => {
  return (
    <div id="home" className="dark">
      <img className="background" src={image} alt="" />
      <div style={{ position: "absolute", top: "30%", left: "6rem" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "2.5rem",
          }}
        >
          {email && (
            <a href={`mailto:${email}`}>
              <img src={envelopeIcon} alt="email" className="socialIcon" />
            </a>
          )}
          {gitHub && (
            <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
              <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
            </a>
          )}
          {linkedIn && (
            <a
              href={`https://www.linkedin.com/in/${linkedIn}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
            </a>
          )}
        </div>
      </div>
      <div style={{ position: "absolute", top: "30%", left: "38rem" }}>
        <img src={headshot} alt="" style={{ height: "35vh", width: "30vw",border: "none", borderRadius: "30px" }} />
      </div>
      <div style={{ position: "absolute", bottom: "8rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </div>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
  email: "",
  gitHub: "",
  linkedIn: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  gitHub: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
};

export default Home;
