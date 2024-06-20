import Button from "../components/Button";
import navArrow from "../assets/icons/location-arrow-solid.svg";
import { Fade } from "react-awesome-reveal";

export default function Hero() {

    const buttonClickHandler = () => {

    }

    return (
        <div
            id="home"
            className="w-full flex xl:flex-row flex-col 
                justify-center"
        >
            
            <div className="relative xl:w-3/5 md:mt-72 mt-52 flex flex-col items-center gap-5 max-xl:padding-x">
                <Fade direction="down" triggerOnce={true}>
                    <h1 className="main-text xl:text-[3.8rem] md:text-[2.6rem] sm:text-[2rem] text-[1.6rem] text-center">Where creativity meets code <br /> crafting the <span className="text-purple-clr">future of the web</span></h1>
                </Fade>

                <Fade direction="up" triggerOnce={true}>
                    <p className="font-palanquin text-white-clr leading-normal mx-auto  md:text-lg text-[0.7rem] mb-12 max-md:mb-6 opacity-[.90]">Hi! I'm Emil Roydev, a Front-end Developer based in Rousse, Bulgaria.</p>
                    <Button label={"Show my work"} imageUrl={navArrow} buttonHandler={buttonClickHandler} classes={'xl:text-[1.1rem] lg:text-[1rem] text-[0.8rem] py-5 px-4'}/>
                </Fade>
            </div>

         
        </div>
    );
}