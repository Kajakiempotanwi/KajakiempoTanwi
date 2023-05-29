import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const EtapsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsEtap {
                cdesc
                ctitle
                desc
                title
                stitle
                happy {
                    hdesc
                    id
                }
            }
        }
    `);

    const etapsData = data.datoCmsEtap;
    const { cdesc, ctitle, desc, title, stitle, happy } = etapsData;
    return (
        <section id="etaps" className=" relative py-20">
            <div className="absolute inset-0 -z-20 w-full h-full bg-fixed">
                <StaticImage
                    quality={100}
                    layout="constrained"
                    loading="spływy kajakowe"
                    className="w-full h-full"
                    alt="Kajaki Po Tanwi"
                    title="Kajaki Po Tanwi"
                    src="../../assets/etaps.jpg"
                />
            </div>

            <div className="absolute inset-0 bg-black opacity-50 -z-10" />
            <div className="grid md:grid-cols-2 max-w-screen-xl mx-auto px-6 text-white">
                <div>
                    <p className="w-full md:w-[70%] font-medium md:text-start mb-6 ">
                        {desc}
                    </p>
                    <div className="grid grid-cols-2 lg:pr-24 space-y-2">
                        {happy.map((item, id) => (
                            <div
                                key={id}
                                className="flex items-center justify-start"
                            >
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

                                <p className="font-medium text-start text-sm">{item.hdesc}</p>
                            </div>
                        ))}
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
                            {stitle}
                        </h3>
                        <div className="w-1/2 h-1 rounded-3xl border-b border-amber-600 bg-amber-400" />
                        <p className="text-xl md:text-2xl font-medium">
                            {title}
                        </p>
                    </div>
                    <div className="flex-center flex-col w-60 bg-white rounded-lg overflow-hidden text-black">
                        <p className="bg-gradient-to-br from-amber-500 to-orange-500 w-full py-3 text-white font-medium">
                            {ctitle}
                        </p>
                        <p className="p-4">{cdesc}</p>
                    </div>
                    <div className="relative mt-12">
                        <div className="relative bg-gradient-to-br from-amber-500 to-orange-500 w-[50vw] md:w-80 h-2 rounded-3xl">
                            <button className="absolute h-12 w-12 top-1/2 left-0 -translate-y-1/2 rounded-full btn_main">
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
                            </button>
                            <button className="absolute h-12 w-12 top-1/2 left-[33.33%] -translate-y-1/2 rounded-full btn_main">
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
                            </button>
                            <button className="absolute h-12 w-12 top-1/2 left-[66.66%] -translate-y-1/2 rounded-full btn_main">
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
                            </button>
                            <button className="absolute h-12 w-12 top-1/2 left-[99%] -translate-y-1/2 rounded-full btn_main">
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
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EtapsSection;
