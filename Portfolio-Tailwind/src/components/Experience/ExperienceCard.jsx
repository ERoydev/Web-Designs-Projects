import H1Component from "../H1Component";

export default function ExperienceCard({
    imgPath,
    h1Text,
    pText
}) {
    return(
        <div className="window md:w-[50%] h-40 flex gap-5 items-center lg:pl-10 pl-5 max-md:justify-center loader">
            <div className="overflow-hidden rounded-full bg-gray-600 lg:w-[100px] lg:h-[100px] w-[75px] h-[75px] flex items-center">
                <img src={imgPath} alt='laptop' className="lg:w-[100px] lg:h-[100px] w-[75px] h-[75px]"/>
            </div>

            <div className="relative flex flex-col justify-center w-[60%]">
                <H1Component classNames={'relative lg:text-[1.4rem] sm:text-[0.9rem] md:max-xl:text-[1rem] text-[0.8rem] pb-1'} text={h1Text}/>
                <p className="text-gray-500 font-semibold lg:text-[0.9rem] xl:text-[0.9rem] text-[0.6rem]">{pText}</p>
            </div>
        </div>

    );
}