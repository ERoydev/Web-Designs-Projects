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
        <div className="overflow-hidden relative window px-5 py-8 mx-auto w-[700px] xl:h-[700px] h-[600px] max-[864px]:w-[100%] max-sm:h-[550px] max-md:h-[600px] flex flex-col loader upwards">
            <div className="mb-10">
                <div className="px-2 pt-4 pb-6 rounded-xl">
                    <img src={imageUrl} alt="Planet Earth" className="rounded-2xl border border-slate-100/[0.1]" />
                </div>
            </div>

            <div className="px-3 mb-10">
                <H1Component classNames={'relative text-[1.3rem] mb-2'} text={name}></H1Component>
                <p className="info-text">{description}</p>
            </div>
            
            <div className="flex justify-between items-center bottom-6 absolute w-[94%] max-[864px]:w-[91%]">
                <div className="flex gap-1">
                    {techstack.length > 0 && techstack.map((tech, index) => (<ProjectTechItem key={index} imgUrl={tech} />))}
                </div>

                <div>
                    <Button label="Check Repository" imageUrl={''} buttonHandler={buttonClickHandler} classes={'w-40 h-[50px] max-[860px]:h-[40px] max-[860px]:w-24 xl:text-[1rem] lg:text-[0.8rem] text-[0.6rem]'}/>
                </div>
            </div>
        </div>
    );
}