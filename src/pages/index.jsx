import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import VideoCom from "../components/videoCom";

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
                    src="../../static/hero.jpg"
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

            <section id="cards" className="pt-10 md:py-16">
                <div className="mb-6">
                    <p className="p_kayak">KAJAKI PO TANWI</p>
                    <h2 className="font-bold text-lg lg:text-xl text-gray-700">
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
                            src="../../static/cards/k1.jpg"
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
                            src="../../static/cards/k2.jpg"
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
                            src="../../static/cards/k3.jpg"
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

            <section id="etaps" className=" relative py-20">
                <div className=" absolute inset-0 -z-20 w-full h-full">
                    <StaticImage
                        quality={100}
                        layout="constrained"
                        loading="spływy kajakowe"
                        className="w-full h-full"
                        alt="Kajaki Po Tanwi"
                        src="../../static/etaps.jpg"
                    />
                </div>
                <div className="absolute inset-0 bg-black opacity-50 -z-10" />
                <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto px-6 text-white">
                    <div>
                        <p className="w-full md:w-[70%] md:text-start mb-6 ">
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
                        <Link
                            to="/kontakt"
                            className="btn_main flex-start w-max mt-12"
                        >
                            Kontakt
                        </Link>
                    </div>

                    <div className="mt-12 md:mt-0 flex-start flex-col mx-auto">
                        <div className="flex-start flex-col mb-6">
                            <h3 className="font-bold text-sm text-amber-400">
                                PASSAGES
                            </h3>
                            <div className="w-1/2 h-1 rounded-3xl border-b border-amber-600 bg-amber-400" />
                            <p className="text-xl md:text-2xl font-medium">
                                DOŚWIADCZENIE
                            </p>
                        </div>
                        <div className="flex-center flex-col w-60 bg-white rounded-lg overflow-hidden text-black">
                            <p className="bg-gradient-to-br from-amber-500 to-orange-500 w-full py-3 text-white font-medium">
                                4 ETAPY
                            </p>
                            <p className="p-4">
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                            </p>
                        </div>
                        <div className="relative mt-12">
                            <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-[80vw] md:w-80 h-2 rounded-3xl">
                                <div className="absolute h-12 w-12 top-1/2 left-0 -translate-y-1/2 rounded-full btn_main">
                                    <svg
                                        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1465_238)">
                                            <path
                                                d="M6 18V15"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1465_238">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="absolute h-12 w-12 top-1/2 left-1/4 -translate-y-1/2 rounded-full btn_main">
                                    <svg
                                        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1465_244)">
                                            <path
                                                d="M6 18V15"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10 18V12"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1465_244">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="absolute h-12 w-12 top-1/2 left-2/4 -translate-y-1/2 rounded-full btn_main">
                                    <svg
                                        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1465_250)">
                                            <path
                                                d="M6 18V15"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10 18V12"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14 18V9"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18 18V18.01"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1465_250">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <div className="absolute h-12 w-12 top-1/2 left-3/4 -translate-y-1/2 rounded-full btn_main">
                                    <svg
                                        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clip-path="url(#clip0_1465_256)">
                                            <path
                                                d="M6 18V15"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M10 18V12"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M14 18V9"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                            <path
                                                d="M18 18V6"
                                                stroke="white"
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1465_256">
                                                <rect
                                                    width="24"
                                                    height="24"
                                                    fill="white"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="happy" className="py-10 md:py-16">
                <div className="mb-3">
                    <p className="p_kayak">KAJAKI PO TANWI</p>
                    <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                        Wypożycz, odkrywaj, ciesz się
                    </h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-md mx-auto">
                    <div className="flex-center mt-2">
                        <svg
                            className="mr-2"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1471_168)">
                                <path
                                    d="M34.875 21.9383C35.1513 19.8225 34.9728 17.6722 34.3517 15.6308C33.7305 13.5895 32.6809 11.7043 31.2729 10.101C29.8649 8.49771 28.131 7.21334 26.187 6.33369C24.2431 5.45404 22.1337 4.99935 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 16.6667H15.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 16.6667H25.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.8333 25C16.93 26.0667 18.4333 26.6667 20 26.6667C21.5667 26.6667 23.07 26.0667 24.1667 25"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 31.6667L28.3333 35L35 28.3333"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1471_168">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>majority have suffere</p>
                    </div>

                    <div className="flex-center mt-2">
                        <svg
                            className="mr-2"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1471_168)">
                                <path
                                    d="M34.875 21.9383C35.1513 19.8225 34.9728 17.6722 34.3517 15.6308C33.7305 13.5895 32.6809 11.7043 31.2729 10.101C29.8649 8.49771 28.131 7.21334 26.187 6.33369C24.2431 5.45404 22.1337 4.99935 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 16.6667H15.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 16.6667H25.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.8333 25C16.93 26.0667 18.4333 26.6667 20 26.6667C21.5667 26.6667 23.07 26.0667 24.1667 25"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 31.6667L28.3333 35L35 28.3333"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1471_168">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>majority have suffere</p>
                    </div>

                    <div className="flex-center mt-2">
                        <svg
                            className="mr-2"
                            width="40"
                            height="40"
                            viewBox="0 0 40 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clip-path="url(#clip0_1471_168)">
                                <path
                                    d="M34.875 21.9383C35.1513 19.8225 34.9728 17.6722 34.3517 15.6308C33.7305 13.5895 32.6809 11.7043 31.2729 10.101C29.8649 8.49771 28.131 7.21334 26.187 6.33369C24.2431 5.45404 22.1337 4.99935 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15 16.6667H15.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 16.6667H25.0167"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M15.8333 25C16.93 26.0667 18.4333 26.6667 20 26.6667C21.5667 26.6667 23.07 26.0667 24.1667 25"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                                <path
                                    d="M25 31.6667L28.3333 35L35 28.3333"
                                    stroke="black"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_1471_168">
                                    <rect width="40" height="40" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p>majority have suffere</p>
                    </div>
                </div>
            </section>

            <VideoCom />

            <section
                id="most"
                className="relative min-h-[20rem] md:min-h-[30rem] text-white"
            >
                <div className="absolute inset-0 h-full w-full -z-10">
                    <StaticImage
                        quality={100}
                        style={{ width: "100%", minHeight: "20rem" }}
                        src="../../static/most.jpg"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className="text-2xl sm:text-3xl lg:text-4xl -tracking-wide font-medium mb-6">
                        Umów sie na spływ kajakiem
                    </p>
                    <Link to="/kontakt" className="btn_main">
                        Zadzwoń
                    </Link>
                </div>
            </section>

            <section className="pt-10 md:py-24">
                <div className="mb-10">
                    <p className="p_kayak">KAJAKI PO TANWI</p>
                    <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                        Wypożycz, odkrywaj, ciesz się
                    </h2>
                </div>
            </section>

            <div className="h-[200vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Kajakami Po Tanwi" />;

export default Home;
