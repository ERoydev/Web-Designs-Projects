
export default function Button({
    classes,
    label,
    imageUrl,
    buttonHandler,
}) {

    return(
        <button onClick={buttonHandler} className={`${classes} z-10 rounded-lg relative flex items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56`}>
            <span className="relative flex md:gap-2 gap-1 justify-center items-center font-montserrat">
                {label}
            {imageUrl != '' &&
            (<img 
                src={imageUrl} 
                alt="navigation-arrow-location" 
                className="md:w-4 md:h-4 w-3 h-3"
            />)
            }
            </span>
       
        </button>
    )
}