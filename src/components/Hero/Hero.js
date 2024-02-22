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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  );
}

export default Hero;
