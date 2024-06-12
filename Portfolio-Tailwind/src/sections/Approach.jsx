import ApproachCard from "../components/Approach/ApproachCard";
import H1Component from "../components/H1Component";

export default function Approach() {
    return(
        <section className="max-container">
            <h1 className="mb-24 main-text text-[3.8rem] text-center">Development <span className="text-purple-clr">Process</span></h1>

            <div className="md:flex max-md:flex-col max-md:space-y-6 md:justify-between">
                <ApproachCard pText={'Start with an in-depth discussion to understand your needs, goals, and vision for the project. After that i create a detailed project plan outlining timelines, milestones, and deliverables.'} />
                <ApproachCard pText={'Develop wireframes and prototypes to visualize the project layout and user flow. Design a user-friendly and visually appealing interface focusing on the user experience. Build the project using modern technologies, ensuring clean and efficient code. '} />
                <ApproachCard pText={'Perform rigorous testing to identify and fix any bugs or issues. Ensure the project meets all requirements and standards. Present the project to the client for feedback and make any necessary revisions. Deploy the project to a live environment and provide ongoing support and maintenance.'} />
            </div>
        </section>
    );
}