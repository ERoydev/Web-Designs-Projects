export default function H1Component({
    classNames,
    text
}) {
    return(
        <h1 className={`tracking-tight leading-snug absolute z-20 opacity-100 main-text ${classNames}`}>{text}</h1>
    );
}