import "./Hero.css";
import Headshot from "./clipart-headshot.png";

function Hero() {
  return (
    <div className="hero-container">
      <img src={Headshot} alt="clipart-headshot" className="headshot" />
      <div className="hero-text">
        <h1>Hero</h1>
      </div>
    </div>
  );
}

export default Hero;
