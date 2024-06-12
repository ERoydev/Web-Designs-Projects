import Button from "../components/Button";
import navArrow from "../assets/icons/location-arrow-solid.svg";
import linedin from "../assets/svg/linkedin.svg";
import github from "../assets/svg/github.svg";

export default function Footer() {
    return(
        <>
            <div className="max-container flex flex-col items-center mb-16">
                <div className="mb-14 lg:w-[70%]">
                    <h1 className="mb-6 main-text xl:text-[3.4rem] md:text-[2.6rem] text-[1.8rem] text-center">Looking to <span className="text-purple-clr">collaborate</span> or have any inquiries? Feel free to reach out</h1>
                    <p className="font-normal text-center font-palanquin text-gray-300 leading-normal mx-auto xl:text-lg md:text-[1.2rem] sm:text-[0.9rem] text-[0.6rem] opacity-[.90]">Drop me a line! I’m here to answer your questions and discuss potential collaborations.</p>
                </div>
                <Button label={"Get in touch"} imageUrl={navArrow}/>
            </div>

            <div className="flex justify-between w-[100%] items-center">
                <p className="text-white-clr md:text-[0.9rem] text-[0.6rem] font-normal">Copyright &copy; 2024 Emil Roydev</p>

                <div className="flex gap-3">
                    <div className="window p-3 hover:bg-slate-800 hover:cursor-pointer scale-90 shadow-none transition-shadow hover:scale-100 hover:shadow-lg hover:shadow-gray-700">
                        <img src={github} alt="Github icon" className="md:w-[35px]  md:h-[35px] w-[20px] h-[20px]"/>
                    </div>

                    <div className="window p-3 hover:bg-slate-800 hover:cursor-pointer scale-90 shadow-none transition-shadow hover:scale-100 hover:shadow-lg hover:shadow-gray-700">
                        <img src={linedin} alt="Linkedin icon" className="md:w-[35px] md:h-[35px] w-[20px] h-[20px]"/>
                    </div>
                </div>
            </div>
        </>
    );
}