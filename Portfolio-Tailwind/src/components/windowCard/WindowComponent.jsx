import H1Component from "../H1Component";

export default function WindowComponent({
    imgPath,
    divClassNames,
    h1ClassNames,
    h1Text,
}) {
    return(
        <div className={`overflow-hidden rounded-3xl w-full relative ${divClassNames}`}>
            <img src={imgPath} alt="Section Image" className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black opacity-80 shadow-inner"></div>
            <H1Component classNames={h1ClassNames} text={h1Text} />
        </div>
    );
}