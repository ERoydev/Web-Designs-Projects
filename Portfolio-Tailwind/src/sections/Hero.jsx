import Button from "../components/Button";
import navArrow from "../assets/icons/location-arrow-solid.svg";

export default function Hero() {

    const buttonClickHandler = () => {

    }

    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col 
                justify-center
                .max-container"
        >

            <div className="relative xl:w-3/5 mt-72 flex flex-col items-center gap-5 max-xl:padding-x">
                <h1 className="main-text text-[3.8rem] text-center">Where creativity meets code <br /> crafting the <span className="text-purple-clr">future of the web</span></h1>
                <p className="font-palanquin text-white-clr leading-normal mx-auto text-lg opacity-[.90]">Hi! I'm Emil Roydev, a Front-end Developer based in Rousse, Bulgaria.</p>
                <Button label={"Show my work"} imageUrl={navArrow} buttonHandler={buttonClickHandler}/>
            </div>

         
        </section>
    );
}