import React from "react";
import "./componentstyle.css";
import BrainyImage from "../assests/BrainyLingo.png";
import Casino from "../assests/Casino.png";
import Aisample from "../assests/Aisample.PNG";
import speakable from "../assests/speakable.png";
import horizontalscrollimage from "../assests/horizontalScroll.png";
import TMDB from "../assests/TMDB.png";
import grahmstays from "../assests/grhamStays.png";
import EmiCalculator from "../assests/emicalculator.png";
import Ciksha from "../assests/Ciksha.png";
import navrattan from "../assests/navrattan.PNG";
import digiroitwebsite from "../assests/digiroitwebsite.png";
import { Link, useNavigate } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "BrainyLingo",
      image: require("../assests/BrainyLingo.png"),
      link: "https://brainylingo.co.uk/",
    },
    {
      id: "2",
      name: "Ciksha (Freelancing)",
      image: require("../assests/Ciksha.png"),
      link: "https://ciksha.com/",
    },
    {
      id: "3",
      name: "React Fiber Sample with 3D Model",
      image: require("../assests/Aisample.PNG"),
      link: "https://myaisample.netlify.app/",
    },
    {
      id: "4",
      name: "Speakable English",
      image: require("../assests/speakable.png"),
      link: "https://speakable.online/",
    },
    {
      id: "5",
      name: "Casino",
      image: require("../assests/Casino.png"),
      link: "https://casino.betamxpertz.xyz/",
    },
    {
      id: "6",
      name: "Navrattan Holdings (Freelancing)",
      image: require("../assests/navrattan.PNG"),
      link: "https://main--staticnavrattanholding.netlify.app/",
    },
    {
      id: "7",
      name: "React Fiber Sample with Horizontal Scroll",
      image: require("../assests/horizontalScroll.png"),
      link: "https://ai-final-beta.vercel.app/",
    },
    {
      id: "8",
      name: "TMDB Duplicate using TMDB APIs",
      image: require("../assests/TMDB.png"),
      link: "https://warm-cat-98b4c5.netlify.app/",
    },
    {
      id: "9",
      name: "Graham Stays",
      image: require("../assests/grhamStays.png"),
      link: "https://grhamstays.com/",
    },
    {
      id: "10",
      name: "EMI Calculator",
      image: require("../assests/emicalculator.png"),
      link: "https://amansh23.github.io/Emi-calculator/",
    },
    {
      id: "11",
      name: "Sample Digiroit Website",
      image: require("../assests/digiroitwebsite.png"),
      link: "https://endearing-kheer-ba4dfd.netlify.app/",
    },
  ];
  const navigate  =  useNavigate()

  const handleexplorebtn  =  (projectid) => {
    navigate(`/projects/${projectid}`);
  }

  return (
    <div className="Projects_container">
      <div className="Projects_Leftcontainer">
        <h3>Projects</h3>
        <p>
          Explore a collection of professional projects I’ve crafted during my
          first year of experience. Each project reflects my dedication to
          solving real-world problems, leveraging modern technologies, and
          delivering user-centric designs.
        </p>
      </div>
      <div className="Projects_rightcontainer">
        {projects.map((project) => (
          <div key={project.id} className="Projects_box">
            <img src={project.image} alt={project.name} />
            <div className="Projects_box_cont">
              <p>{project.name}</p>
              <Link to={project.link} className="Projects_box_link">
                {project.link}
              </Link>
              <button className="Projects_box_cont_button" onClick={() => handleexplorebtn(project.id) }>Explore Project</button>
            </div>
            <div className="ProjectOverlay"> </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
