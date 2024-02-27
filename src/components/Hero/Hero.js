import "./Hero.css";
import Headshot from "./clipart-headshot.png";

function Hero() {
  return (
    <div className="hero-container">
      <img src={Headshot} alt="clipart-headshot" className="headshot" />
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
