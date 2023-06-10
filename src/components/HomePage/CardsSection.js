import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CardsSection = () => {
    const data = useStaticQuery(graphql`
        {
            datoCmsCard {
                desc
                title
                card {
                    desc
                    slug
                    title
                    img {
                        gatsbyImageData(
                            forceBlurhash: false
                            height: 200
                            width: 400
                            placeholder: NONE
                        )
                    }
                    id
                }
            }
        }
    `);

    const cardData = data.datoCmsCard;
    const { title, desc, card } = cardData;
    return (
        <section id="cards" className="pt-10 md:py-16 relative">
            <div className="mb-6">
                <p className="p_kayak">{title}</p>
                <h3 className="font-bold text-lg lg:text-xl text-gray-700">
                    {desc}
                </h3>
            </div>
            <div className="grid grid-cols-1 gap-12 md:gap-0 px-6 md:grid-cols-3 justify-center w-full max-w-screen-xl mx-auto text-center">
                {card.map((item, id) => (
                    <Link
                        key={id}
                        to={item.slug}
                        className="border md:hover:bg-[#dbdfde] md:hover:scale-[1.02] md:hover:shadow-xl transition-transform bg-[#E2E9E8] rounded-lg shadow-lg mx-auto overflow-hidden w-[95%] h-[max]"
                    >
                        <GatsbyImage
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "10rem",
                            }}
                            loading="eager"
                            image={getImage(item.img)}
                            title={item.title}
                            alt="kajaki tanew"
                        />

                        <h3 className="pb-2 pt-4 px-3 font-bold uppercase">
                            {item.title}
                        </h3>
                        <p className="pb-4 px-6 md:px-2 lg:px-6">{item.desc}</p>
                        <p className="px-3 pb-6 Link_kayak">ZOBACZ &#8594;</p>
                    </Link>
                ))}
            </div>
            <div className="mt-12 mb-12 md:mt-20 md:mb-6">
                <Link to="/szlak-kajakowy" className="btn_main">
                    Zobacz Trase
                </Link>
            </div>
        </section>
    );
};

export default CardsSection;
