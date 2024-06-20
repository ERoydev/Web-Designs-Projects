export default function GlowingButton({
    positionClasses,
    label,
    out
}) {

    const buttonClickHandler = (e) => {
        const copyEmailBtn = document.getElementById('copy-email-btn');
        const emailAddress = "e.roydev@gmail.com"; 

        navigator.clipboard.writeText(emailAddress);

        e.target.textContent = out;
    }

    return(
        <div className={positionClasses}>
            <div className="relative inline-flex  group">
                <div
                    className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                </div>

                <button onClick={buttonClickHandler} className="px-8 py-4 2xl:text-[0.9rem] lg:text-[0.7rem] sm:text-[0.6rem] text-[0.5rem] relative inline-flex items-center justify-center text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">{label}</button>
            </div>
        </div>
    );
}