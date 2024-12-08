import "./Hero.css";
import Headshot from "./headshot.jpg";
import { Avatar } from "@mui/material";

function Hero() {
  return (
    <div className="hero-container">
      <Avatar
        alt="John's Headshot"
        src={Headshot}
        sx={{
          zIndex: 1,
          width: { xs: "200px", sm: "250px", md: "350px" },
          height: { xs: "200px", sm: "250px", md: "350px" },
          gridColumn: "1 / span 2",
          gridRow: "1 / span 3",
          marginBottom: "60px",
        }}
      />
      <h1 className="hero-title">Hello, I'm John!</h1>
      <div className="links">
        <a href={"/#projects"}>Projects</a>
        <a href={"/#experience"}>Experience</a>
        <a href={"/#contact"}>Contact</a>
      </div>
      <p className="hero-text">
        Driven to blend form and function, I craft full-stack solutions with a
        heart. Javascript, React, and cloud services aren't just tools- they're
        my palette for creating web experiences that resonate and endure.
      </p>
    </div>
  );
}

export default Hero;
