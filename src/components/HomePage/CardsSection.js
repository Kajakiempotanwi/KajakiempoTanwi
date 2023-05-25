import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

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
            <div className="grid grid-cols-1 gap-12 md:gap-0 px-6 md:grid-cols-3 justify-center w-full max-w-screen-xl mx-auto text-center">
                {card.map((item, id) => (
                    <Link
                        key={id}
                        to={item.slug}
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-[1.02] md:hover:shadow-xl transition-transform bg-[#E2E9E8] pb-5 rounded-lg shadow-lg mx-auto overflow-hidden"
                        style={{ width: "300px", height: "300px" }} // Dodane style
                    >
                        <img
                            src={item.img.fluid.src}
                            alt={item.title}
                            style={{ objectFit: "cover", width: "100%", height: "50%" }} // Dodane style
                        />

                        <h3 className="pb-2 pt-4 px-3 font-bold uppercase">
                            {item.title}
                        </h3>
                        <p className="pb-4 px-6">{item.desc}</p>
                        <p className="px-3 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                ))}
            </div>
            <div className="mt-12 mb-12 md:mt-20 md:mb-6">
                <Link to="/szlak-kajakowy" className="btn_main">
                    Zobacz Trasy
                </Link>
            </div>
        </section>
    );
};

export default CardsSection;
