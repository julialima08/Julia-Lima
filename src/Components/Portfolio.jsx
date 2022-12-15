/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/design-desk.jpeg";

// const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    image: "https://ucarecdn.com/7a8e4244-8494-49fa-a0fb-8ecfa2c0728a/",
    title: "Retro Tic-Tac-Toe",
    description:
      "My very first 'project' at General Assembly was to build a tic-tac-toe game with just HTML, Vanilla Javascript, and CSS... with just one weeks experience in all three languages. Back then, that was the hardest promt ",
    deployUrl: "https://retrotictactoe.surge.sh/",
    gitUrl: "https://github.com/julialima08/u1_hw_tic_tac_toe",
  },
  {
    image: "https://ucarecdn.com/474b179a-e59e-41fe-a334-9423866034a3/",
    title: "Wordle",
    description:
      "This is my own version of the popular game Wordle made with HTML, CSS, and vanilla Javascript. This game generates a random five letter word that the player must guess within six attempts. One thing that is different from the original wordle game is that my game has three levels. With each level, the word length grows progresively longer. I also added a dark theme so that players can costumize the styling of their game",
    deployUrl: "https://3levelwordle.surge.sh/index.html",
    gitUrl: "https://github.com/julialima08/Wordle",
  },
  {
    image: "https://ucarecdn.com/2b5c80b7-88d2-4671-9eb9-36e163ad7717/",
    title: "Digital Record Player",
    description:
      "Digital Record Player is a music player that allows you to add songs to your playlist and see playlists other people created. What makes this app different from the rest is the illusion of listening to a record that gives users the nostalgic feeling they don't get from other music streaming platforms.",
    deployUrl: "https://digital-record-player.herokuapp.com/",
    gitUrl: "https://github.com/julialima08/Digital-Record-Player",
  },
  {
    image: "https://ucarecdn.com/97a9f2bc-3ada-4efd-b017-24949096b7f9/",
    title: "Dinker",
    description:
      "Dinker is a Tinder inspired application meant to connect developers with other devs who want to collaborate on projects. Users can create accounts that showcase their skills, past projects, social links, and make posts inquiring help for projects. An unique feature of Dinker is the annomosity and silliness of our profile picture avatars. Dinker is not made to be a dating app, or a place to superfially judge others' looks, but instead a place where devs can grow their portfolios while also networking with one another!",
    deplyUrl: "https://dinker.herokuapp.com/",
    gitUrl: "https://github.com/julialima08/Dinker-Backend",
    gitUrl2: "https://github.com/julialima08/Dinker-Frontend",
  },
  {
    image: "https://ucarecdn.com/47e7d865-9d87-47e6-8841-36ac7689073b/",
    title: "Weekend Getaway",
    description:
      "Weekend Getaway is an application made for people who love to travel and stay organized while doing it. Users can create accounts and search for fligths, hotels, and activities for their next vacation! Once the user decides where and when their next vacation will be, they can create a new trip and start adding flights, hotels, and activities. Planning a vaction can get messy, allow us to organize your next weekend getaway.",
    deployUrl: "https://wg-frontend.herokuapp.com/",
    gitUrl: "https://github.com/julialima08/Weekend-Getaway-FE",
    gitUrl2: "https://github.com/julialima08/Weekend-Getaway-BE",
  },
];

const Portfolio = () => {
  return (
    <div className="light" id="portfolio">
      <h2 id="title">Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        {/* <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div> */}
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <img className="project-pic" src={project.image} alt="project" />
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <div className="links">
                <a href={project.gitUrl} target="_blank" rel="noopener noreferrer">
                  <h4>Github Repo</h4>
                </a>
                <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                  <h4>Deployed Progect</h4>
                </a>
              </div>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
