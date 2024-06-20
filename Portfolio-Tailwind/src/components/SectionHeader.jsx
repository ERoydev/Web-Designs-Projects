export default function SectionHeader({
    normalText,
    colorText
}) {
    return(
        <h1 className="xl:mb-24 md:mb-12 mb-8 main-text xl:text-[3rem] md:text-[2.2rem] text-[1.8rem] text-center">{normalText} <span className="text-purple-clr">{colorText}</span></h1>
    );
}