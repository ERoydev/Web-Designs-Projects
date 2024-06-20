import frontEndImg from "../assets/svg/laptop.svg";
import databaseImg from "../assets/svg/database.svg";
import freelanceImg from "../assets/svg/freelance.svg";
import backendImg from "../assets/svg/backend.svg";
import ExperienceCard from "../components/Experience/ExperienceCard";
import SectionHeader from "../components/SectionHeader";
import { Fade } from "react-awesome-reveal";


export default function Experience() {
    return(
    
        <div className="max-container relative" id="experience">
            <Fade delay={100} triggerOnce={true} direction="up">
                <SectionHeader normalText={'My fields of'} colorText={'experience'}/>
            </Fade>

            <Fade delay={200} triggerOnce={true}>    
                <div className="flex justify-center flex-col xl:gap-10 max-xl:gap-8">

                    <div className="md:flex md:space-x-10 max-md:space-y-8">
                        <ExperienceCard imgPath={frontEndImg} h1Text={'FrontEnd Development'} pText={"Creating responsive, interactive, and accessible user interfaces using modern technologies."}/>
                        <ExperienceCard imgPath={databaseImg} h1Text={'Database Management'} pText={"Ensuring efficient, secure, and scalable data storage solutions."} />
                    </div>

                    <div className="md:flex md:space-x-10 max-md:space-y-8">
                        <ExperienceCard imgPath={freelanceImg} h1Text={'Freelance Frontend Projects'} pText={"Delivering high-quality, custom web solutions for diverse clients."} />
                        <ExperienceCard imgPath={backendImg} h1Text={'Django REST API'} pText={'Building robust and scalable APIs with Django.'}/>
                    </div>
                </div>

            </Fade>
        </div>
    );
}