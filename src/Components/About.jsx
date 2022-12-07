/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use Then, set imageAltText to string that
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/moving.gif";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "A recent high school graduate who is looking to get into the tech industry as a front-end web developer. Currently taking a coding bootcamp at General Assembly. I am dedicated, passionated, and a well organized coder hoping to make an impact in the field. My dream is to inspire young girls like myself to not be afraid to join this male dominated field.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React and VueJs",
  "Fullstack(MERN and PERN)",
  "Handrolling Auth",
  "Expert in CSS3",
  "Open to learning new technologies",
  "Javascript, Python, Markdown",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. Development for me is not only a creative outlet for me to build sleek applications, but also a way to make an impact in the tech world and beyond.";

const About = () => {
  return (
    <div className="light" id="about">
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
        <h2>About Me</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 3,
            rows: 2,
            fontSize: "1.20rem",
            margin: "2rem 2rem",
            gap: "2rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </div>
  );
};

export default About;
