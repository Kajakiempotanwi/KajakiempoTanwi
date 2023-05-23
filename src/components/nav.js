import React from "react";
import { useState, useEffect } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Nav() {
    const [showMenu, setMenu] = useState(false);
    const handleMenu = () => setMenu(!showMenu);
    const closeMenu = () => setMenu(false);

    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };

    useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
    });

    return (
        <header
            className="
                    z-50 mx-auto sticky top-0 text-center
            "
        >
            <div className={"absolute top-0 bg-transparent mx-auto  w-full"}>
                <div
                    className={
                        !navbar
                            ? "h-full w-full mx-auto py-1 absolute top-0 -z-10 transition-colors duration-300"
                            : "h-full w-full mx-auto py-1 bg-[#E2E9E8] shadow-lg absolute top-0 -z-10 transition-colors duration-300"
                    }
                ></div>
                <nav
                    className={
                        showMenu
                            ? "max-w-screen-2xl mx-auto px-4 py-2 md:py-4 flex items-start justify-between w-full navTextColor bg-[#E2E9E8] transition-colors duration-100 z-50"
                            : "max-w-screen-2xl mx-auto px-4 py-2 md:py-2 flex items-start justify-between w-full navTextColor transition-colors duration-100 z-50"
                    }
                >
                    <Link
                        to="/"
                        className="flex items-center justify-center relative"
                        aria-label="logo"
                    >
                        <div
                            className={`transition-all mr-2 duration-200 ${
                                navbar || showMenu
                                    ? "w-12 h-12"
                                    : "w-12 h-12 lg:h-20 lg:w-20"
                            } `}
                        >
                            <StaticImage
                                quality={100}
                                className="h-full w-full"
                                loading="eager"
                                placeholder="blurred"
                                alt="Kajaki Po Tanwi Logo"
                                src="../../static/lt.png"
                            />
                        </div>
                        <p
                            className={`absolute w-max left-full -tracking-wide font-bold text-sm sm:text-base lg:text-lg ${
                                navbar || showMenu
                                    ? "text-gray-800"
                                    : "text-amber-400 drop-shadow-xl"
                            } `}
                        >
                            Kajakiem po Tanwi
                        </p>
                    </Link>
                    <button
                        aria-label="Menu"
                        onClick={handleMenu}
                        className={`group lg:hidden p-2.5  z-50 rounded-lg bg-[#262626] `}
                    >
                        <div
                            className={`w-5 h-1 transition-all duration-200 m-1 bg-slate-100 rounded-lg ${
                                showMenu ? "translate-y-2 rotate-45" : ""
                            }`}
                        />
                        <div
                            className={`w-3 h-1 transition-all duration-200 m-1 bg-slate-100 rounded-lg ${
                                showMenu ? "opacity-0" : ""
                            }`}
                        />
                        <div
                            className={`w-5 h-1 transition-all duration-200 m-1 bg-slate-100 rounded-lg ${
                                showMenu ? "-translate-y-2 -rotate-45" : ""
                            }`}
                        />
                    </button>
                    <ul
                        className={
                            showMenu
                                ? "absolute text-base lg:text-lg top-full left-0 pb-4 flex flex-col lg:static text-center w-full bg-[#E2E9E8] opacity-100 transition duration-200 -translate-y-0 -z-10"
                                : "absolute top-full left-0 py-2 flex flex-col lg:opacity-100 lg:static lg:flex lg:flex-row lg:items-center lg:justify-end lg:top-0 lg:translate-y-0 lg:py-0 text-center w-full opacity-0 -translate-y-full transition duration-100 -z-10 lg:z-10 lg:ml-8"
                        }
                    >
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="Strona Główna"
                                className={`md:hover:text-amber-500 ${
                                    navbar || showMenu
                                        ? "font-semibold text-slate-800 "
                                        : "font-semibold text-white "
                                }`}
                                to="/"
                            >
                                Strona Główna
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="Szlak Kajakowy"
                                className={`md:hover:text-amber-500 ${
                                    navbar || showMenu
                                        ? "font-semibold text-slate-800 "
                                        : "font-semibold text-white "
                                }`}
                                to="/szlak-kajakowy"
                            >
                                Szlak Kajakowy
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="Cennik"
                                className={`md:hover:text-amber-500 ${
                                    navbar || showMenu
                                        ? "font-semibold text-slate-800 "
                                        : "font-semibold text-white "
                                }`}
                                to="/cennik"
                            >
                                Cennik
                            </Link>
                        </li>

                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="galeria"
                                className={`md:hover:text-amber-500 ${
                                    navbar || showMenu
                                        ? "font-semibold text-slate-800 "
                                        : "font-semibold text-white "
                                }`}
                                to="/galeria"
                            >
                                Galeria
                            </Link>
                        </li>
                        <li className="mx-5 my-2 px-2 py-2">
                            <Link
                                onClick={closeMenu}
                                aria-label="kontakt"
                                className={`md:hover:text-amber-500 ${
                                    navbar || showMenu
                                        ? "font-semibold text-slate-800 "
                                        : "font-semibold text-white "
                                }`}
                                to="/kontakt"
                            >
                                Kontakt
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

//  Nav;
