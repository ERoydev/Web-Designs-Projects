import jobboImg from "../../assets/Images/projects/jobbo/mainPage.png";
import arrowImg from "../../assets/icons/right-arrow.svg";
import Button from "../Button";
import H1Component from "../H1Component";
import ProjectTechItem from "./ProjectTechItem";

export default function ProjectItem({
    name,
    description,
    imageUrl,
    techstack
}) {

    const buttonClickHandler = () => {

    }

    return (
        <div className="overflow-hidden relative window px-5 py-8 w-[700px] h-[700px] flex flex-col loader">
            <div className="mb-10">
                <div className="px-2 pt-4 pb-6 rounded-xl">
                    <img src={imageUrl} alt="Planet Earth" className="rounded-2xl border border-slate-100/[0.1]" />
                </div>
            </div>

            <div className="px-3 mb-10">
                <H1Component classNames={'relative text-[1.3rem] mb-2'} text={name}></H1Component>
                <p className="info-text">{description}</p>
            </div>
            
            <div className="flex justify-between bottom-6 absolute w-[93%]">

                <div className="flex gap-1">
                    {techstack.length > 0 && techstack.map(tech => (<ProjectTechItem imgUrl={tech} />))}
                </div>

                <div>
                    <Button label="Check Repository" imageUrl={arrowImg} buttonHandler={buttonClickHandler}/>
                </div>
            </div>
        </div>
    );
}