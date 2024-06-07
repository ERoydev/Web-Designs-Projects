export default function Projects() {
    return(
        <section className="flex flex-col">
            <h1 className="main-text text-[3.8rem] text-center">collection of my recent <span className="text-purple-clr">projects</span></h1>

            <div className="flex">
                <div className="overflow-hidden rounded-3xl w-full relative">
                        {/* <img src={planetImg} alt="Planet Earth" className="w-full h-full object-cover"/> */}
                        <div className="absolute inset-0 bg-black opacity-70 shadow-inner"></div>
                        <h1 className="tracking-tight leading-snug absolute z-20 md:bottom-10 bottom-5 sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">I maintain transparency, offer updates and seek feedback for alignment and satisfaction.</h1>
                </div>

                <div className="overflow-hidden rounded-3xl w-full relative">
                    {/* <img src={planetImg} alt="Planet Earth" className="w-full h-full object-cover"/> */}
                    <div className="absolute inset-0 bg-black opacity-70 shadow-inner"></div>
                    <h1 className="tracking-tight leading-snug absolute z-20 md:bottom-10 bottom-5 sm:pl-10 pl-5 pr-5 opacity-100 main-text 2xl:text-[1.4rem] lg:text-[1.2rem] sm:text-[0.9rem] text-[0.8rem]">I maintain transparency, offer updates and seek feedback for alignment and satisfaction.</h1>
                </div>
            </div>

        </section>
    );
}