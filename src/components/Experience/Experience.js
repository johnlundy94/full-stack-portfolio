import "./Experience.css";

function Experience() {
  return (
    <div className="experience-container" id="experience">
      <div className="skills-content">
        <h1 className="skills-title">Skills</h1>
        <p className="p-title">PROGRAMMING LANGUAGES</p>
        <p className="p-content">JavaScript</p>
        <p className="p-title">WEB TECHNOLOGIES</p>
        <p className="p-content">UX/UI, CSS, React, SQL, NoSQL, Web APIs</p>
        <p className="p-title">TESTING</p>
        <p className="p-content">Unit Testing, Integration Testing</p>
        <p className="p-title">OTHER</p>
        <p className="p-content">Git, Firebase, AWS Backend Technologies</p>
      </div>

      <div className="education-content">
        <h1 className="education-title">Education</h1>
        <p className="p-title">UNIVERSITY OF DENVER BOOTCAMP GRADUATE</p>
        <p className="p-content">
          Developed numerous web applications focusing on JavaScript, CSS, SQL,
          NoSQL, Web APIs, and MERN stack.
        </p>
        <p className="p-title">META'S ADVANCED REACT COURSE</p>
        <p className="p-content">
          Gained a deep understanding of JavaScript’s role in React, component
          architecture, state management, UI/UX design, and testing.
        </p>
      </div>
    </div>
  );
}

export default Experience;
