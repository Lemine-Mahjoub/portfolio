import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython, faFigma } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const FrontEnd = [
    "React",
    "TypeScript",
    "JavaScript",
    "NextJS",
    "Redux",
    "HTML5",
    "CSS3",
    "SASS",
    "Tailwind",
    "Shadcn",
    "Material-UI",
    "Bootstrap",
    "Framer Motion",
];

const BackEnd = [
    "Docker",
    "Linux",
    "Python",
    "Django",
    "Express.js",
    "NestJS",
    "Firebase",
    "SQL",
    "PostgreSQL",
    "MongoDB",
];

const Design = [
    "UI/UX Design",
    "Design Thinking",
    "Wireframing",
    "Prototyping",
    "User Testing",
    "Design Systems",
    "Figma",
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Front-End Development</h3>
                        <p>
                            I specialize in building modern, responsive, and interactive user interfaces using the latest web technologies.
                            My expertise includes working with component-based frameworks, state management, and performance optimization.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {FrontEnd.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Back-End Development</h3>
                        <p>
                            I develop scalable and secure back-end systems, working with databases, APIs, and server-side frameworks.
                            My experience includes handling authentication, cloud deployments, and microservices architectures.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {BackEnd.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faFigma} size="3x" />
                        <h3>UI/UX Design</h3>
                        <p>
                            I create user-friendly and visually appealing designs by applying UI/UX principles.
                            My workflow includes wireframing, prototyping, and usability testing to ensure seamless user experiences.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {Design.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;
