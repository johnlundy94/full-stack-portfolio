import "./Projects.css";
import Cards from "../ProjectCard/ProjectCards";

const projects = [
  {
    id: 1,
    title: "Verdant Vision Landscaping",
    description:
      "A sleek, AWS-powered interface for landscape services, offering design visualization and appointment scheduling. Demonstrates expertise in cloud solutions, serverless architecture, and database scalability.",
    getImageSrc: () => require("./vvl.png"),
    github: "https://github.com/johnlundy94/landscape",
    website: "https://www.verdantvisionslandscaping.com/",
  },
  {
    id: 2,
    title: "Calorie Counter",
    description:
      "A user-friendly app providing tailored nutritional tracking, with Firebase-backend authentication and live data updates. Simplifies daily calorie management through an intuitive questionnaire-based setup.",
    getImageSrc: () => require("./calorie-counter.png"),
    github: "https://github.com/johnlundy94/calorie_counter",
    website: "https://www.johnscaloriecounter.com/",
  },
  {
    id: 3,
    title: "Little Lemon",
    description:
      "Merges appealing design with a reliable reservations system, ensuring seamless user experiences and precision in booking management to prevent overlaps.",
    getImageSrc: () => require("./little-lemon.png"),
    github: "https://github.com/johnlundy94/little_lemon",
    website: "https://www.johnlittlelemon.com/",
  },
];

function Projects() {
  return (
    <div className="projects-container" id="projects">
      <h1 className="projects-title">Projects</h1>
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
