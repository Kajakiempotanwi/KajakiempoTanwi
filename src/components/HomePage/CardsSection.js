import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const CardsSection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsCard {
                desc
                title
                card {
                    desc
                    slug
                    title
                    img {
                        fluid {
                            src
                        }
                    }
                    id
                }
            }
        }
    `);

    const cardData = data.datoCmsCard;
    const { title, desc, card } = cardData;
    return (
        <section id="cards" className="pt-10 md:py-16">
            <div className="mb-6">
                <p className="p_kayak">{title}</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    {desc}
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-8 px-6 md:grid-cols-3 justify-center w-full max-w-screen-xl mx-auto text-center">
                {card.map((item, id) => (
                    <Link
                        key={id}
                        to={item.slug}
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                    >
                        <StaticImage
                            quality={100}
                            className="w-full"
                            src="../assets/cards/k1.jpg"
                        />

                        <h3 className="py-4 px-3 font-bold uppercase">
                            {item.title}
                        </h3>
                        <p className="pb-6 px-6">{item.desc}</p>
                        <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                ))}

                {/* <Link
                    to="/"
                    className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                >
                    <StaticImage
                        quality={100}
                        className="w-full"
                        src="../assets/cards/k1.jpg"
                    />

                    <h3 className="py-4 px-3 font-bold uppercase">{title}</h3>
                    <p className="pb-6 px-6">
                    </p>
                    <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                </Link> */}
                {/* <Link
                    to="/"
                    className="border md:hover:bg-[#dbdfde] md:hover:scale-105 transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                >
                    <StaticImage
                        quality={100}
                        className="w-full"
                        src="../assets/cards/k2.jpg"
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
                        src="../assets/cards/k3.jpg"
                    />

                    <h3 className="py-4 px-3 font-bold">DLA DZIECI</h3>
                    <p className="pb-6 px-6">
                        have suffered alteration in some form, by injected
                        humour
                    </p>
                    <p className="py-3 px-3 Link_kayak">ZOBACZ &#8594;</p>
                </Link> */}
            </div>
            <div className="mt-8 mb-8">
                <Link to="/" className="btn_main">
                    Zobacz Trasy
                </Link>
            </div>
        </section>
    );
};

export default CardsSection;
