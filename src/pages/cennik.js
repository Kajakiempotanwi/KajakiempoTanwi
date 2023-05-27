import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import TopImg from "../components/topImg";

const Cennik = () => {
    return (
        <Layout>
            <TopImg />

            <div className="mb-6 mt-10 md:my-16">
                <p className="p_kayak">Kajakiem Po Tanwi</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    Cennik
                </h2>
            </div>
            <div className="flex flex-col md:flex-row mx-auto max-w-screen-2xl">
                <div className="w-full lg:w-4/6 md:mx-10 lg:mx-24 rounded-lg text-start">
                    <div className="flex-between bg-green-100 font-medium py-1 px-2 rounded-md">
                        <p className="capitalize">dwuosobowy kajak</p>
                        <p>80zł/dzień</p>
                    </div>
                    <StaticImage
                    durationFadeIn={600}
                    alt="kajak"
                        quality={100}
                        className="w-full object-contain"
                        src="../assets/kajak.jpg"
                    />
                    <p className="text-sm text-start font-medium px-2 text-[#1A6873]">
                        Kajaki firmy ROTOMOD
                    </p>

                    <div className="flex flex-col md:flex-row mt-4 md:my-10 text-start">
                        <div className="w-full rounded-lg ">
                            <p className="px-4 mb-6">
                                <strong>Kajaki firmy ROTOMOD</strong> -
                                dwuosobowy kajak rekreacyjno - turystyczny dla
                                początkujących i zaawansowanych z dodatkowym
                                siedzeniem dla dziecka. Bardzo wygodne siedzenia
                                z wysokimi oparciami zapewniają wygodę podczas
                                całodniowych wypraw. Szybki, zwinny ale i
                                stabilny kajak, łatwy do prowadzenia.
                            </p>
                            <p className="px-4 mb-6">
                                <strong>Wiosła egalis twin Alu </strong> -
                                proste, lekkie i wytrzymałe wiosła, idealne na
                                spływ po rzece, zapewniają komfort w sterowaniu
                                kajakiem a takze że względu na swoją długość
                                ułatwiają odepchnięcie się od ewentualnej
                                przeszkody.
                            </p>
                            <p className="px-4">
                                <strong>
                                    Kamizelki asekuracyjne firmy RTM
                                </strong>
                                - kamizelki w rozmiarach od S do XXL więc każdy
                                znajdzie rozmiar dla siebie, wygodne i proste w
                                zapięciu kamizelki, zapewniają komfort i
                                bezpieczeństwo podczas spływu.
                            </p>
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

export const Head = () => <Seo title="Cennik Wypożyczenia Kajaków" />;

export default Cennik;
