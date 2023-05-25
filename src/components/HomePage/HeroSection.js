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
                loading="eager"
                className="w-full h-full min-h-[23rem]"
                alt="Kajaki Po Tanwi"
                src="../../assets/hero.jpg"
            />
            <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
            <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
                <h2 className="uppercase orange_gradient mt-12 text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-bold">
                    {title}
                </h2>
                <h1 className="mt-5 text-gray-200 -tracking-wide sm:w-1/2 lg:w-1/3 mx-auto">Kajakiem po Tanwi Spływy kajakowe Susiec</h1>
                <p className="sm:w-1/2 lg:w-1/3 mx-auto text-center text-gray-200 mb-6">
                    {desc}
                </p>
                <Link
                    className="text-white text-sm md:text-base border py-1.5 px-6 rounded-2xl text-center md:hover:bg-white/10"
                    to="/cennik"
                >
                    Cennik
                </Link>
            </div>
        </section>
    );
};

export default HeroSection;
