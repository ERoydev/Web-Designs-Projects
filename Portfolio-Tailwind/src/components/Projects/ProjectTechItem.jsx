// p-2 rounded-full window flex items-center justify-center
export default function ProjectTechItem({
    imgUrl,
}) {
    return (
        <div className="flex items-start">
            <div className="p-2 rounded-full window">
                <img src={imgUrl} alt="Technology icon" className="xl:w-[25px] xl:h-[25px] w-[18px] h-[18px] max-[400px]:w-[12px] max-[400px]:h-[12px]"/>
            </div>
        </div>
    );
}