import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
    return (
        <Layout>
            <section id="hero" className="w-full min-h-[23rem] relative">
                <StaticImage
                    quality={100}
                    layout="constrained"
                    loading="eager"
                    className="w-full h-full min-h-[23rem]"
                    alt="Kajaki Po Tanwi"
                    src="../static/hero.jpg"
                />
                <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
                <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="uppercase orange_gradient mt-12 text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-bold">
                        PRZEŻYJ PRZYGODĘ NA KAJAKU
                    </h1>
                    <p className="sm:w-1/2 lg:w-1/3 mx-auto mt-5 text-center text-gray-200 mb-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words
                    </p>
                    <Link
                        className="text-white text-sm md:text-base border py-1.5 px-6 rounded-2xl text-center md:hover:bg-white/10"
                        to="/cennik"
                    >
                        Cennik
                    </Link>
                </div>
            </section>

            <section id="cards" className="pt-6 md:py-12">
                <div className="mb-6">
                    <p className="p_kayak">KAJAKI PO TANWI</p>
                    <h2 className="font-bold text-lg text-gray-700">
                        Wypożycz, odkrywaj, ciesz się
                    </h2>
                </div>
                <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 justify-center w-full max-w-screen-xl mx-auto text-center">
                    <Link
                        to="/"
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                    >
                        <StaticImage
                            quality={100}
                            className="w-full"
                            src="../static/cards/k1.jpg"
                        />

                        <h3 className="py-4 px-3 font-bold">SPRZĘT</h3>
                        <p className="pb-6 px-6">
                            have suffered alteration in some form, by injected
                            humour
                        </p>
                        <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                    <Link
                        to="/"
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                    >
                        <StaticImage
                            quality={100}
                            className="w-full"
                            src="../static/cards/k2.jpg"
                        />

                        <h3 className="py-4 px-3 font-bold">PRZYGODA</h3>
                        <p className="pb-6 px-6">
                            have suffered alteration in some form, by injected
                            humour
                        </p>
                        <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                    <Link
                        to="/"
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-all bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                    >
                        <StaticImage
                            quality={100}
                            className="w-full"
                            src="../static/cards/k3.jpg"
                        />

                        <h3 className="py-4 px-3 font-bold">DLA DZIECI</h3>
                        <p className="pb-6 px-6">
                            have suffered alteration in some form, by injected
                            humour
                        </p>
                        <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                </div>
                <div className="mt-8 mb-8">
                    <Link to="/" className="btn_main">
                        Zobacz Trasy
                    </Link>
                </div>
            </section>

            <section id="etaps" className=" relative py-6">
                <div className=" absolute inset-0 -z-20 w-full h-full">
                    <StaticImage
                        quality={100}
                        layout="constrained"
                        loading="spływy kajakowe"
                        className="w-full h-full"
                        alt="Kajaki Po Tanwi"
                        src="../static/etaps.jpg"
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-50 -z-10" />
                <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto px-6 text-white">
                    <div>
                        <p className="w-[80%] md:text-start mb-6 ">
                            There are many variations of passages of Lorem Ipsum
                            available, but the majority have suffered There are
                            many variations of passages of Lorem Ipsum
                            available, but the majority have suffered
                        </p>
                        <div className="grid grid-cols-2 lg:pr-24 space-y-2">
                            <div className="flex items-center justify-start">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="mr-2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1465_262)">
                                        <path
                                            d="M5 12L10 17L20 7"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1465_262">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p className="font-medium">Ipsum available</p>
                            </div>
                            <div className="flex items-center justify-start">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="mr-2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1465_262)">
                                        <path
                                            d="M5 12L10 17L20 7"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1465_262">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p className="font-medium">Ipsum available</p>
                            </div>
                            <div className="flex items-center justify-start">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    className="mr-2"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1465_262)">
                                        <path
                                            d="M5 12L10 17L20 7"
                                            stroke="white"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1465_262">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p className="font-medium">Ipsum available</p>
                            </div>
                        </div>
                    </div>

                    <div></div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Kajakami Po Tanwi" />;

export default Home;
