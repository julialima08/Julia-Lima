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
import image from "../images/gray.webp";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "As a highly ambitious and organized Front-End Developer, I specialize in utilizing languages such as JavaScript, HTML, CSS, Python, Markdown, and JSON to deliver top-quality products. My attention to detail and ability to work under pressure, along with my strong communication and time management skills, make me a valuable asset to any team. With a recent high school diploma, I am excited to bring fresh ideas and a strong work ethic to any software engineering job. My dream is to inspire young girls like myself to not be afraid to join this male dominated field.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "React and VueJs",
  "Fullstack (MERN and PERN)",
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
          backgroundColor: "#b57d6d",
          width: "65vw",
          padding: "3rem",
          margin: "1rem auto",
          textAlign: "center",
          borderRadius: "25px",
          mozBoxShadow: "0 0 20px #2b2b2b",
          webkitBoxShadow: "0 0 20px #2b2b2b",
          boxShadow: "0 0 20px #2b2b2b",
          opacity: ".7",
        }}
      >
        <h2 id="title">About Me</h2>
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
