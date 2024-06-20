import { Fade } from "react-awesome-reveal";
import ProjectItem from "../components/Projects/ProjectItem";
import SectionHeader from "../components/SectionHeader";
import {allProjects} from "../sections/index.js";

export default function Projects() {
    return(
        <div className="max-container flex flex-col" id="projects">
            <Fade delay={100} triggerOnce={true} direction="up">
                <SectionHeader normalText={'Collection of my recent'} colorText={'projects'} />
            </Fade>

            <Fade delay={200} triggerOnce={true}>
                <div className="lg:flex gap-12 max-lg:space-y-10">
                    {allProjects.length > 0 && allProjects.map((project, index) => (<ProjectItem key={index} {...project} />))}
                </div>
            </Fade>
        </div>
    );
}