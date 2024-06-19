import ProjectItem from "../components/Projects/ProjectItem";
import SectionHeader from "../components/SectionHeader";
import { jobboProject } from "./index.js";


export default function Projects() {
    return(
        <div className="max-container flex flex-col">
            <SectionHeader normalText={'Collection of my recent'} colorText={'projects'} />

            <div className="flex gap-5">
                <ProjectItem {...jobboProject} />

            </div>

        </div>
    );
}