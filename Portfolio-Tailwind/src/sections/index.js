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

export {
    Hero,
    About,
    Projects,
    Education,
    Experience,
    Footer,
    Approach,
    techStackData,
}
