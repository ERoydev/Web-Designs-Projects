export default function Button({
    label,
    imageUrl
}) {
    return(
        <button className="text-white-clr border-2 border-neutral-500/[.20] p-2 w-fit rounded-lg px-8 py-2 flex gap-2 items-center mt-7">
            {label}
            <img 
                src={imageUrl} 
                alt="navigation-arrow-location" 
                className="w-4 h-4"
            />
        </button>
    )
}