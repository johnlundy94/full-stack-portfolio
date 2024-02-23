import "./Projects.css";
import vvl from "./vvl.png";
import calorieCounter from "./calorie-counter.png";
import littleLemon from "./little-lemon.png";
import { Link } from "@mui/material";
import Cards from "../../ProjectCard/ProjectCards";

const projects = [
  {
    id: 1,
    title: "Verdant Vision Landscaping",
    description:
      "The transformation of our backyard was nothing short of magical. Alex and his team at Verdant Valley Landscaping worked with us to create a sustainable oasis. Their attention to detail and dedication to eco-friendly practices were evident. Our garden is now not only beautiful but also a haven for local wildlife. We couldn't be happier!",
    getImageSrc: () => require("./vvl.png"),
    github: "https://github.com/johnlundy94/landscape",
    website: "https://main.d2tfrzc9xc7mg4.amplifyapp.com/",
  },
  {
    id: 2,
    title: "Calorie Counter",
    description:
      "We tasked Verdant Valley with the challenge of designing a low-maintenance yet elegant landscape for our front yard. They exceeded our expectations! The design was thoughtful, and the execution was flawless. Our neighbors are constantly complimenting us on the improvement. Thank you, Verdant Valley!",
    getImageSrc: () => require("./calorie-counter.png"),
    github: "https://github.com/johnlundy94/calorie_counter",
    website: "https://johns-calorie-counter.netlify.app/",
  },
  {
    id: 3,
    title: "Little Lemon",
    description:
      "Choosing Verdant Valley Landscaping for our property overhaul was the best decision we could have made. Alex's vision for our outdoor space has added immense value to our property. The team's professionalism and skill were unparalleled, and the result is a stunning, serene space that we enjoy every day",
    getImageSrc: () => require("./little-lemon.png"),
    github: "https://github.com/johnlundy94/little_lemon",
    website: "https://johns-little-lemon.netlify.app/",
  },
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1>Projects</h1>
      {projects.map((project) => (
        <Cards
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          github={project.github}
          website={project.website}
        />
      ))}
    </div>
  );
}

export default Projects;
