import computerImg from "../assets/computer.jpg";


export default function About(){

    return(
        <section className="flex flex-col items-center w-full .max-container">

            <div className="relative xl:w-4/5 grid md:grid-cols-3 auto-rows-[250px] gap-7">
                
                <div className="md:col-span-2 md:row-span-2 window flex">
                    <div className="overflow-hidden rounded-3xl w-full relative">
                        <img src={computerImg} alt="Computer" className="w-full h-full object-cover"/>
                        <div class="absolute inset-0 bg-black opacity-80 shadow-inner"></div>
                        <h1 className="absolute z-20 md:bottom-10 bottom-5 sm:px-10 px-5 opacity-100 main-text lg:text-[1.5rem] sm:text-[0.9rem] text-[0.8rem]">I view my relationship with clients as a partnership, where their goals become my own.</h1>
                    </div>
                </div>

                <div className="window relative">
                    <h1 className="absolute z-20 md:bottom-10 bottom-5 sm:px-10 px-5 opacity-100 main-text lg:text-[1.5rem] sm:text-[0.9rem] text-[0.8rem]">I maintain transparency, offer updates and seek feedback for alignment and satisfaction.</h1>
                </div>

                <div className="window">
                    <h1>I prioritize clients.</h1>
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