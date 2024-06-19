export default function SectionHeader({
    normalText,
    colorText
}) {
    return(
        <h1 className="mb-24 main-text text-[3.4rem] text-center">{normalText} <span className="text-purple-clr">{colorText}</span></h1>
    );
}