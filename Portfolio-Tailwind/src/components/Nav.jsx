import { navLinks } from "../constants";


export default function Nav() {
    return(
        <header className="relative">
            <nav className="flex justify-center">
                <ul className="flex absolute top-10 items-center justify-center gap-16 px-10 py-6 bg-neutral-600/[.16] rounded-2xl border border-slate-500/[.20]">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a 
                                href={item.href}
                                className="font-montserrat leading-normal text-white-clr"
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