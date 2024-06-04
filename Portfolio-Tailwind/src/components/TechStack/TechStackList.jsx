import { techStackData } from "../../sections/index";
import TechStackItem from "./TechStackItem";
import TechStackLabels from "./TechStackLabels";

export default function TechStackList() {
    return(
        <>
            <div className="flex space-y-5 px-3 animate-loop-scroll-up flex-col">
                {techStackData.length > 0 && techStackData.map((tech) => (<TechStackLabels key={tech.name} name={tech.name} />))}
            </div>

            <div className="flex space-y-4 px-3 animate-loop-scroll-down flex-col">
                {techStackData.length > 0 && techStackData.map((tech) => (<TechStackItem key={tech.name} img={tech.imageUrl} name={tech.name} />))}
            </div>

        </>
    );
}