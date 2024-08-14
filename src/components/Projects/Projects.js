import "./Projects.css";
import Cards from "../ProjectCard/ProjectCards";

const projects = [
  {
    id: 1,
    title: "Verdant Vision Admin",
    description:
      "A robust SAAS addon to Verdant Visions Landscaping, providing a comprehensive admin dashboard for real-time quote management and client communication. Built with React and Material UI on the front-end, and AWS-powered back-end services for seamless, live interactions. This solution exemplifies expertise in serverless architecture, cloud integration, and efficient client management systems.",
    getImageSrc: () => require("./verdant-admin.png"),
    github: "https://github.com/johnlundy94/landscape-admin",
    website: "https://verdantvisionslandscapingadmin.com/",
  },
  {
    id: 2,
    title: "Verdant Vision Landscaping",
    description:
      "A sleek interface for landscape services, offering design visualization and quote submission with an AWS-powered back-end. Demonstrates understanding in cloud solutions, serverless architecture, and database scalability.",
    getImageSrc: () => require("./vvl.png"),
    github: "https://github.com/johnlundy94/landscape",
    website: "https://verdantvisionslandscapingadmin.com/",
  },
  {
    id: 3,
    title: "Calorie Counter",
    description:
      "A user-friendly app providing tailored nutritional tracking, with Firebase-backend authentication and live data updates. Simplifies daily nutritional management through an intuitive questionnaire-based setup.",
    getImageSrc: () => require("./calorie-counter.png"),
    github: "https://github.com/johnlundy94/calorie_counter",
    website: "https://www.johnscaloriecounter.com/",
  },
  {
    id: 4,
    title: "Little Lemon",
    description:
      "Merges appealing design with a reliable reservation system, ensuring seamless user experiences and precision in booking management to prevent overlaps.",
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
