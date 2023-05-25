import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const ImgSection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsImg {
                stitle
                title
                imgdesc {
                    img {
                        fluid {
                            src
                        }
                    }
                    desc
                    title
                }
            }
        }
    `);

    const imgData = data.datoCmsImg;
    const { stitle, title, imgdesc } = imgData;
    return (
        <section id="cards" className="pt-10 md:py-16">
            <div className="mb-6 md:my-12">
                <p className="p_kayak">{stitle}</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    {title}
                </h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:gap-12 px-6 md:grid-cols-2 justify-center w-full max-w-screen-xl mx-auto text-center">
                {imgdesc.map((item, id) => (
                    <div
                        key={id}
                        className="transition-transform h-max pb-2 rounded-lg mx-auto overflow-hidden"
                    >
                        <img
                            src={item.img.fluid.src}
                            alt={item.title}
                            style={{
                                borderRadius:"10px",
                                objectFit: "cover",
                                width: "100%",
                                height: "50%",
                            }}
                        />

                        <div className="text-start py-2 px-4">
                            <h3 className="pb-2 pt-4 font-bold uppercase">
                                {item.title}
                            </h3>
                            <p className="pb-4">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-4 mb-4 md:mt-10 md:mb-3">
                <Link to="/galeria" className="btn_main">
                    Galeria
                </Link>
            </div>
        </section>
    );
};

export default ImgSection;
