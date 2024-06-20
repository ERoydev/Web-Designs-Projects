import { useEffect, useState } from "react";
import chevronImg from "../assets/icons/chevron-up.svg";


export default function TopButton() {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 1400) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div
            className={`fixed bottom-28 right-12 z-5 p-3 rounded-full transition-all duration-700 ease-in-out 
                ${isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'}
                hover:cursor-pointer hover:bg-slate-300/[0.5] bg-slate-600/[0.8]`}
            onClick={scrollToTop}
        >
            <img src={chevronImg} alt="Top Button" className="w-[35px] h-[35px]" />
        </div>
    );
}