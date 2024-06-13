export default function ContactItem({
    labelText,
    pText,
    svgItem
}) {
    return(
        <div className="flex gap-3">
            {svgItem}
            <div>
                <label htmlFor="name" className="font-normal text-center font-palanquin text-gray-300">{labelText}</label>
                <p id="name" className="font-montserrat font-bold text-white-clr">{pText}</p>
            </div>
        </div>

    );
}