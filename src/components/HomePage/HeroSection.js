import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const HeroSection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsHero {
                title
                desc
            }
        }
    `);

    const heroData = data.datoCmsHero;
    const { title, desc } = heroData;

    return (
        <section id="hero" className="w-full min-h-[23rem] relative">
            <StaticImage
                quality={100}
                layout="constrained"
                durationFadeIn={600}
                loading="eager"
                className="w-full h-full min-h-[23rem]"
                alt="Kajaki Po Tanwi"
                title="Kajaki Po Tanwi"
                src="../../assets/hero.jpg"
            />
            <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
            <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
                <h2 className="uppercase orange_gradient mt-12 text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-bold">
                    {title}
                </h2>
                <p className="sm:w-1/2 lg:w-1/3 mx-auto text-center text-gray-200 mb-4">
                    {desc}
                </p>
                <h1 className="text-gray-200 tracking-wider mb-2">Kajaki Tanew</h1>
                <Link
                    className="text-white text-sm md:text-base border py-1.5 px-6 rounded-2xl text-center md:hover:bg-white/10"
                    to="/cennik"
                >
                    Zadzwoń
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
