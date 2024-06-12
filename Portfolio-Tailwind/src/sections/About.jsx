import computerImg from "../assets/computer.jpg";
import planetImg from "../assets/planet.jpg";
import codeImg from "../assets/code_block.jpg";
import meditationThree from "../assets/three.jpg";
import GlowingButton from "../components/Buttons/GlowingButton";
import WindowComponent from "../components/windowCard/WindowComponent";
import PurpleGradient from "../components/BackgroundGradients/PurpleGradient";
import TechStackScrollComponent from "../components/TechStack/TechStackScrollComponent";

export default function About(){
    return(
        <section className="flex flex-col items-center w-full .max-container">
            <div className="relative xl:w-4/5 grid xl:grid-cols-3 auto-rows-[240px] gap-7">
                
                <div className="md:col-span-2 md:row-span-2 window flex">
                    <WindowComponent 
                        imgPath={computerImg} 
                        divClassNames={''} 
                        h1ClassNames={'sm:px-10 px-5 lg:text-[1.5rem] sm:text-[0.9rem] text-[0.8rem] md:bottom-10 bottom-5'}
                        h1Text={'I view my relationship with clients as a partnership, where their goals become my own.'}
                        />
                </div>

                <div className="overflow-hidden window flex relative">
                    <WindowComponent 
                        imgPath={planetImg} 
                        divClassNames={''} 
                        h1ClassNames={'sm:pl-10 pl-5 pr-5 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem] md:bottom-10 bottom-5'}
                        h1Text={'I maintain transparency, offer updates and seek feedback for alignment and satisfaction.'}
                        />
                </div>

                <div className="overflow-hidden window flex relative">
                    <TechStackScrollComponent />

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
                    <PurpleGradient />
                    <div className="absolute inset-0 bg-black opacity-20 shadow-inner"></div>
                    <h1 className="text-center tracking-tight leading-snug absolute z-20 bottom-[60%] opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[1.2rem] p-2 text-[1.2rem]">Interested in working together?</h1>
                    
                    <GlowingButton positionClasses={'absolute bottom-[20%]'} label={'Copy my email address'} out={'Email is Copied!'}/>
                </div>

                <div className="overflow-hidden md:col-span-2 md:row-span-2 window flex relative">
                    <WindowComponent 
                        imgPath={meditationThree} 
                        divClassNames={''} 
                        h1ClassNames={'sm:px-10 px-5 lg:text-[1.5rem] sm:text-[0.9rem] text-[0.8rem] md:bottom-10 bottom-5'}
                        h1Text={'Seamless Integration of Frontend and Backend Technologies.'}
                    />
                </div>
            </div>
        </section>
    );
}