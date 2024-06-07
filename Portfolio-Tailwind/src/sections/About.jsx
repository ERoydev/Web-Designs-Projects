import computerImg from "../assets/computer.jpg";
import planetImg from "../assets/planet.jpg";
import codeImg from "../assets/code_block.jpg";
import TechStackLabels from "../components/TechStack/TechStackLabels";
import TechStackList from "../components/TechStack/TechStackList";
import GlowingButton from "../components/Buttons/GlowingButton";

export default function About(){
    return(
        <section className="flex flex-col items-center w-full .max-container">
            <div className="relative xl:w-4/5 grid md:grid-cols-3 auto-rows-[240px] gap-7">
                
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

                <div className="overflow-hidden window flex relative">
                    <div className="flex flex-col gap-4 ml-auto">
                        <div className="flex ml-auto px-5">
                            <TechStackList />
                        </div>

                        <div className="flex ml-auto px-5" aria-hidden="true">
                            <TechStackList />
                        </div>
                    </div>
                        <p className="info-text absolute bottom-[60%] top-[40%] sm:pl-10 pl-5 pr-5 2xl:text-[1rem] lg:text-[0.9rem] sm:text-[0.7rem] text-[0.5rem]">I am improving</p>
                        <h1 className="tracking-tight leading-snug absolute z-20 bottom-[50%] top-[50%] sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">My tech stack.</h1>
                </div>

                <div className="overflow-hidden window flex relative items-center">
                    <div className="absolute right-0 flex overflow-hidden mr-5 translate-y-[70%]">
                        <div className="absolute inset-0 bg-black opacity-5 rounded-2xl shadow-inner"></div>
                        <img src={codeImg} alt="" className="w-[200px] h-auto border border-gray-500/30 rounded-2xl"/>
                    </div>
                    <h1 className="tracking-tight leading-snug z-20 sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">I prioritize user experience to create intuitive, engaging interfaces.</h1>
                </div>

                <div className="row-start-4 window relative overflow-hidden flex justify-center">
                    <div className="gradient-bg">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <filter id="goo">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="goo" />
                                <feBlend in="SourceGraphic" in2="goo" />
                                </filter>
                            </defs>
                        </svg>

                        <div className="gradient-container">
                            <div className="g1"></div>
                            <div className="g2"></div>
                            <div className="g3"></div>
                            <div className="g4"></div>
                            <div className="g5"></div>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-20 shadow-inner"></div>
                    <h1 className="text-center tracking-tight leading-snug absolute z-20 bottom-[60%] opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[1.2rem] p-2 text-[1.2rem]">Interested in working together?</h1>
                    
                    <GlowingButton positionClasses={'absolute bottom-[20%]'} label={'Copy my email address'} out={'Email is Copied!'}/>
                </div>

                <div className="md:col-span-2 md:row-span-2 window">
                    <h1>I prioritize clients.</h1>
                </div>
            </div>
        </section>
    );
}