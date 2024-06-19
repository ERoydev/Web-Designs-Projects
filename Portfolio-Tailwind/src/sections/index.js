// SECTIONS
import About from "./About";
import Approach from "./Approach";
import Education from "./Education";
import Experience from "./Experience";
import Hero from "./Hero";
import Footer from "./Footer";
import Projects from "./Projects";
// END OF SECTIONS

// TECH STACK
import pythonImg from '../assets/Images/technologies/python.svg';
import javascriptImg from '../assets/Images/technologies/javascript.svg';
import htmlImg from '../assets/Images/technologies/html.svg';
import cssImg from '../assets/Images/technologies/css.svg';
import reactImg from '../assets/Images/technologies/react.svg';
import djangoImg from '../assets/Images/technologies/django.svg';
import postgreImg from '../assets/Images/technologies/postgresql.svg';
import nodejsImg from '../assets/Images/technologies/nodejs.svg';
import githubImg from '../assets/Images/technologies/github.svg';
import linuxImg from '../assets/Images/technologies/linux.svg';
import dockerImg from '../assets/Images/technologies/docker.svg';
import photoshopImg from '../assets/Images/technologies/photoshop.svg';
import figmaImg from '../assets/Images/technologies/figma.svg';
import tailwindImg from '../assets/Images/technologies/tailwind.svg';

const techStackData = [
    {name: "Python", imageUrl: pythonImg},
    {name: "JavaScript", imageUrl: javascriptImg},
    {name: "HTML", imageUrl: htmlImg},
    {name: "CSS", imageUrl: cssImg},
    {name: "ReactJS", imageUrl: reactImg},
    {name: "Django", imageUrl: djangoImg},
    {name: "PostgreSQL", imageUrl: postgreImg},
    {name: "NodeJS", imageUrl: nodejsImg},
    {name: "Github", imageUrl: githubImg},
    {name: "Linux", imageUrl: linuxImg},
    {name: "Docker", imageUrl: dockerImg},
    {name: "Photoshop", imageUrl: photoshopImg},
    {name: "Figma", imageUrl: figmaImg},
    {name: "Tailwind", imageUrl: tailwindImg},
]
// END OF TECH STACK

// PROJECTS DATA
import jobboImg from "../assets/Images/projects/jobbo/mainPage.png";
import portfolioImg from "../assets/Images/projects/portfolio/portfolio.png";

const jobboProject = {
    name: 'Jobbo - Job Search Website',
    description: 'Jobbo is designed to bridge the gap between job seekers and employers, offering a seamless, efficient, and engaging platform. Implemented using DJANGO REST for the backend and ReactJS for the frontend. The platform supports various features like profile management, job listings, and application tracking, making it a comprehensive solution for the job market.',
    imageUrl: jobboImg,
    techstack: [reactImg, djangoImg, postgreImg, htmlImg, cssImg],
    githubLinkL: ''
}

const portfolioProject = {
    name: 'Portfolio Website',
    description: 'A personal portfolio website designed to showcase my design and development skills. This project utilizes Tailwind CSS for streamlined and responsive design, and ReactJS for a dynamic and interactive user experience. The site features a variety of sections including an about me page, project showcase, and contact form, all built with a focus on modern web standards and best practices.',
    imageUrl: portfolioImg,
    techstack: [reactImg, tailwindImg, htmlImg, cssImg]
}
const allProjects = [
    jobboProject,
    portfolioProject
]


// END OF PROJECTS DATA

export {
    Hero,
    About,
    Projects,
    Education,
    Experience,
    Footer,
    Approach,
    techStackData,
    allProjects,
}
