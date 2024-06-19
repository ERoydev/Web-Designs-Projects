
export default function Button({
    label,
    imageUrl,
    buttonHandler,
}) {

    return(
        <button onClick={buttonHandler} className="rounded-lg relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56">
            <span className="relative z-10 flex gap-2 items-center font-palanquin">{label}
            <img 
                src={imageUrl} 
                alt="navigation-arrow-location" 
                className="w-4 h-4"
            />
            </span>
       
        </button>
    )
}