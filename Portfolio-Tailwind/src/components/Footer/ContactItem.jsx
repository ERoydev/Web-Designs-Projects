export default function ContactItem({
    labelText,
    pText,
    svgItem
}) {
    return(
        <div className="flex gap-3">
            {svgItem}
            <div>
                <label htmlFor="name" className="font-normal text-center font-palanquin text-gray-300 xl:text-[1rem] md:text-[0.8rem] text-[0.7rem]">{labelText}</label>
                <p id="name" className="font-montserrat font-bold text-white-clr xl:text-[1rem] md:text-[0.85rem] text-[0.7rem]">{pText}</p>
            </div>
        </div>

    );
}