import computerImg from "../assets/computer.jpg";
import planetImg from "../assets/planet.jpg"
import TechStackLabels from "../components/TechStack/TechStackLabels";
import TechStackList from "../components/TechStack/TechStackList";

export default function About(){
    return(
        <section className="flex flex-col items-center w-full .max-container">

            <div className="relative xl:w-4/5 grid md:grid-cols-3 auto-rows-[250px] gap-7">
                
                <div className="md:col-span-2 md:row-span-2 window flex">
                    <div className="overflow-hidden rounded-3xl w-full relative">
                        <img src={computerImg} alt="Computer" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black opacity-80 shadow-inner"></div>
                        <h1 className="tracking-tight leading-snug absolute z-20 md:bottom-10 bottom-5 sm:px-10 px-5 opacity-100 main-text lg:text-[1.5rem] sm:text-[0.9rem] text-[0.8rem]">I view my relationship with clients as a partnership, where their goals become my own.</h1>
                    </div>
                </div>

                <div className="overflow-hidden window flex relative">
                    <div className="overflow-hidden rounded-3xl w-full relative">
                        <img src={planetImg} alt="Planet Earth" className="w-full h-full object-cover"/>
                        <div className="absolute inset-0 bg-black opacity-70 shadow-inner"></div>
                        <h1 className="tracking-tight leading-snug absolute z-20 md:bottom-10 bottom-5 sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">I maintain transparency, offer updates and seek feedback for alignment and satisfaction.</h1>
                    </div>
                </div>

                <div className=" window flex relative">
                    <div className="flex flex-col gap-4 ml-auto">
                        <div className="flex ml-auto px-5">
                            <TechStackList />
                        </div>

                        <div className="flex ml-auto px-5" aria-hidden="true">
                            <TechStackList />
                        </div>
            

                    </div>
                        <h1 className="tracking-tight leading-snug absolute z-20 md:bottom-10 bottom-5 sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">My tech stack.</h1>
                </div>

                <div className="window">
                    <h1>I prioritize clients.</h1>
                </div>

                <div className="row-start-4 window">
                    <h1>I prioritize clients.</h1>
                </div>

                <div className="md:col-span-2 md:row-span-2 window">
                    <h1>I prioritize clients.</h1>
                </div>
            </div>
        </section>
    );
}