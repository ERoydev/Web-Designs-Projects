export default function SocialItem({
    imgPath,
}) {
    return(
        <div className="window p-3 hover:bg-slate-800 hover:cursor-pointer scale-90 shadow-none transition-shadow hover:scale-100 hover:shadow-lg hover:shadow-gray-700">
            <img src={imgPath} alt="Github icon" className="md:w-[35px]  md:h-[35px] w-[20px] h-[20px]"/>
        </div>
    );
}