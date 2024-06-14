import { navLinks } from "../constants";


export default function Nav() {
    return(
        <header className="relative">
            <nav className="flex justify-center">
                <ul className="flex absolute top-10 items-center justify-center sm:gap-12 gap-4 sm:px-10 px-7 sm:py-6 py-4 sm:text-[16px] text-[14px] bg-neutral-600/[.16] rounded-2xl border border-slate-500/[.20]">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href}
                                className="font-montserrat leading-normal text-white-clr ease-in duration-300 hover:text-orange-600" 
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}