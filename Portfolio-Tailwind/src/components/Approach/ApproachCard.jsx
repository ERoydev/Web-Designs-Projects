import H1Component from "../H1Component";

export default function ApproachCard({
    pText,
}) {
    return(
        <div className="flex flex-col gap-4 max-md:w-[100%] justify-center xl:p-10 p-5 items-center window md:w-[30%] xl:h-[600px]">
            <H1Component classNames={'text-center relative lg:text-[1.3rem] sm:text-[0.9rem] md:max-xl:text-[1rem] text-[0.8rem] pb-1'} text={'Understanding and Planning'}/>
            <p className="info-text text-center">{pText}</p>
        </div>
    );
}