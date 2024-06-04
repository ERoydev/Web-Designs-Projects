
export default function TechStackItem({
    img,
    name
}) {
    return(
        <div className="px-3 py-3 bg-slate-400/10 rounded-md">
            <img src={img} alt="Technology logo" className="w-[40px]"/>
        </div>
    );
}