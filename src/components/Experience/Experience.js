import { useState, useEffect, useRef } from "react";
import "./Experience.css";

function Experience() {
  const [isVisible, setIsVisible] = useState(false);
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <div className="experience-container" id="experience" ref={experienceRef}>
      <div className={`skills-content ${isVisible ? "fade-in" : "hidden"}`}>
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
