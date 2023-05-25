import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Cennik = () => {
    return (
        <Layout>
            <section id="hero" className="w-full min-h-[15rem] relative">
                <StaticImage
                    quality={100}
                    layout="constrained"
                    loading="eager"
                    className="w-full max-h-[15rem] min-h-[15rem] bg-fixed"
                    alt="Kajaki Po Tanwi"
                    src="../assets/hero.jpg"
                />
                <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
                <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="uppercase orange_gradient mt-12 text-xl sm:text-2xl md:text-3xl  lg:text-5xl font-bold -tracking-wide">
                        Kajakiem po Tanwi Spływy kajakowe Susiec
                    </h1>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Cennik Wypożyczenia Kajaków" />;

export default Cennik;
