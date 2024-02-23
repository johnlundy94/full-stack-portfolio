import { Link } from "@mui/material";

const Cards = ({ title, description, imageSrc, github, website }) => {
  return (
    <div>
      <img src={imageSrc} alt="Verdant Landscape Project" className="img1" />
      <div className="project-description">
        <div className="project-links">
          <Link
            href={website}
            className="website"
            sx={{
              fontSize: "35px",
              padding: "20px",
              color: "#ffcabc",
              fontFamily: "Anta, sans-serif",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            Website
          </Link>
          <Link
            href={github}
            className="github"
            sx={{
              fontSize: "35px",
              padding: "20px",
              color: "#ffcabc",
              fontFamily: "Anta, sans-serif",
              fontWeight: "400",
              fontStyle: "normal",
            }}
          >
            Github
          </Link>
        </div>
        <h1>{title}</h1>
        <p className="project-text">{description}</p>
      </div>
    </div>
  );
};

export default Cards;
