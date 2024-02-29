import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container" id="experience">
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>
        <p className="p-title">Front-end</p>
        <p className="p-content">
          React (Hooks, Redux), JavaScript (ES6+), UI/UX Design, Chakra UI,
          Emotion, Material-UI
        </p>
        <p className="p-title">Back-end</p>
        <p className="p-content">
          AWS Services (SDK), Firebase (Auth, Database)
        </p>
        <p className="p-title">Testing</p>
        <p className="p-content">
          Jest, React Testing Library, Integration Testing
        </p>
        <p className="p-title">Tools</p>
        <p className="p-content">
          Git, Chart.js, Formik, Yup, npm, webpack, ESLint
        </p>
      </div>

      <div className="education-content">
        <h1 className="education-title">Education</h1>
        <p className="p-title">UNIVERSITY OF DENVER BOOTCAMP GRADUATE</p>
        <p className="p-content">
          Developed numerous web applications focusing on React, CSS, SQL,
          NoSQL, Web APIs, and MERN stack.
        </p>
        <p className="p-title">META'S ADVANCED REACT COURSE</p>
        <p className="p-content">
          Gained a deep understanding of React, its component architecture and
          state management.Dove into learning UI/UX design, and testing
        </p>
      </div>
    </div>
  );
}

export default Experience;
