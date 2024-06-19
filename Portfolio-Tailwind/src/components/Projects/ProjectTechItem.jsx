export default function ProjectTechItem({
    imgUrl,
}) {
    return (
        <div className="p-2 window flex items-center justify-center ">
            <img src={imgUrl} alt="Technology icon" className="w-[25px] h-[25px]"/>
        </div>
    );
}