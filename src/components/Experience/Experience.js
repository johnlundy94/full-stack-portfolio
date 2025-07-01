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
          JavaScript, React, TypeScript, UI/UX, Material-UI, Responsive and
          Accessible Design
        </p>
        <p className="p-title">Back-end</p>
        <p className="p-content">AWS Services, Firebase, Node, Express</p>
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
        <p className="p-title">AWS CERTIFIED CLOUD PRACTITIONER</p>
        <p className="p-title">
          UNIVERSITY OF DENVER FULL STACK BOOTCAMP GRADUATE
        </p>
        <p className="p-title">UNIVERSITY OF COLORADO BOULDER</p>
      </div>
    </div>
  );
}

export default Experience;
