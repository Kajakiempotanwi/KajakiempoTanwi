import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import TopImg from "../components/topImg";

const Cennik = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsCennik {
                ceny {
                    title
                    price
                    id
                }
                desc
                stitle
                title
            }
        }
    `);
    const priceData = data.datoCmsCennik;
    const { ceny, desc, stitle, title } = priceData;

    return (
        <Layout>
            <TopImg />

            <div className="mb-6 mt-10 md:my-16">
                <p className="p_kayak">{stitle}</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    {title}
                </h2>
            </div>
            <div className="flex flex-col md:flex-row mx-auto max-w-screen-2xl">
                <div className="w-full lg:w-4/6 md:mx-10 lg:mx-24 rounded-lg text-start">
                    {ceny.map((item, id) => (
                        <div
                            key={id}
                            className={`flex-between font-medium py-1 mx-2 px-2 rounded-md mb-1 ${
                                id % 2 === 0 ? "bg-green-100" : "bg-blue-50"
                            }`}
                        >
                            <p className="capitalize">{item.title}</p>
                            <p>{item.price}</p>
                        </div>
                    ))}
                    <StaticImage
                        durationFadeIn={600}
                        alt="kajak"
                        title="kajak"
                        quality={100}
                        className="w-full object-contain"
                        src="../assets/kajak.jpg"
                    />
                    <p className="text-sm text-start font-medium px-3 text-[#1A6873]">
                        Kajaki firmy ROTOMOD
                    </p>

                    <div className="flex flex-col md:flex-row mt-4 md:my-10 text-start">
                        <div className="w-full rounded-lg px-3">
                            <div
                                id="descriptionHtml"
                                dangerouslySetInnerHTML={{
                                    __html: desc,
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/6 md:mx-10 my-10 lg:my-0 text-start px-4">
                    <div className="border p-5 rounded-lg mb-6">
                        <p className="font-bold text-xl text-[#4B4B4B]">
                            Dołacz do nas:
                        </p>
                        <div className="space-x-4 my-3">
                            <Link
                                aria-label="Facebook"
                                to="https://www.facebook.com/kajakiempotanwi"
                            >
                                <StaticImage
                                    durationFadeIn={600}
                                    alt="facebook"
                                    title="facebook"
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../assets/facebook.png"
                                />
                            </Link>
                            <Link
                                aria-label="Instagram"
                                to="https://www.instagram.com/kajakiempotanwi/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3KMcH9JdBcMrolmljM264sarvvk8xuibITApf9M6KBNud7tiR7egu0OZg"
                            >
                                <StaticImage
                                    durationFadeIn={600}
                                    alt="instagram"
                                    title="instagram"
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../assets/instagram.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg bg-yellow-100">
                        <p className="font-bold text-xl text-[#4B4B4B]">
                            Obsługujemy klientów indywidualnych jak i grupy
                            zorganizowane
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title="Cennik spływy kajakowe"
        description="Zobacz najlepsze oferty spływów kajakowych na rzece Tanew. Sprawdź dostępne trasy, terminy i ceny. Zaplanuj aktywny wypoczynek na wodzie z rodziną i przyjaciółmi"
    />
);

export default Cennik;
