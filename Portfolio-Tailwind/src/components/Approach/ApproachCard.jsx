import { useState } from "react";
import H1Component from "../H1Component";

export default function ApproachCard({
    pText,
    hText,
    stage
}) {
    const [show, setShow] = useState(false);

    return(
        <div className="hover:cursor-pointer overflow-hidden relative flex max-md:w-[100%] justify-center xl:p-10 p-5 items-center window md:w-[30%] xl:h-[600px]" 
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        >
            <div className={`loader2 flex flex-col gap-4 ${show ? 'visible' : ''}`}>
                <H1Component classNames={'text-center relative lg:text-[1.3rem] sm:text-[0.9rem] md:max-xl:text-[1rem] text-[0.8rem] pb-1'} text={hText}/>
                <p className="info-text text-center">{pText}</p>
            </div>
            
            <div className={`absolute stage-btn ${show ? 'hidden' : ''}`}>
                <h1 className="px-4 py-2 rounded-3xl border border-slate-400 font-bold text-slate-600 text-[1.5rem]">Stage {stage}</h1>
            </div>
        </div>
    );
}