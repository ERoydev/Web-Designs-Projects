import { Fade } from "react-awesome-reveal";
import ApproachCard from "../components/Approach/ApproachCard";
import SectionHeader from "../components/SectionHeader";

export default function Approach() {
    return(
        <div className="max-container">
            <Fade delay={100} triggerOnce={true} direction="up">
                <SectionHeader normalText={'Development'} colorText={'Process'}/>
            </Fade>
            
            <Fade delay={200} triggerOnce={true}>
                <div className="md:flex max-md:flex-col max-md:space-y-6 md:justify-between">
                    <ApproachCard pText={'Start with an in-depth discussion to understand your needs, goals, and vision for the project. After that i create a detailed project plan outlining timelines, milestones, and deliverables.'} hText={'Understanding and Planning'} stage={'1'} />
                    <ApproachCard pText={'Develop wireframes and prototypes to visualize the project layout and user flow. Design a user-friendly and visually appealing interface focusing on the user experience. Build the project using modern technologies, ensuring clean and efficient code. '} hText={'Design and Development'} stage={'2'} />
                    <ApproachCard pText={'Perform rigorous testing to identify and fix any bugs or issues. Ensure the project meets all requirements and standards. Present the project to the client for feedback and make any necessary revisions. Deploy the project to a live environment and provide ongoing support and maintenance.'} hText={'Testing and Deployment'} stage={'3'}/>
                </div>
            </Fade>
        </div>
    );
}