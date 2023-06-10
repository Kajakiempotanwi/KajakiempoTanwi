import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";
import { graphql, useStaticQuery, Link } from "gatsby";

import {
    HeroSection,
    CardsSection,
    EtapsSection,
    HappySection,
    VideoSection,
    ImgSection,
    OpinieSection,
} from "../components/HomePage/index";

const Home = () => {
    const data = useStaticQuery(graphql`
        query {
            allDatoCmsSeoTekst {
                edges {
                    node {
                        title
                        desc
                    }
                }
            }
        }
    `);

    return (
        <Layout>
            <HeroSection />
            <CardsSection />
            <EtapsSection />
            <HappySection />
            <VideoSection />
            <section
                id="most"
                className="relative min-h-[20rem] md:min-h-[30rem] text-white"
            >
                <div className="absolute inset-0 h-full w-full min-h-[20rem] -z-10">
                    <StaticImage
                        alt="most po tanew"
                        title="most po tanwi"
                        durationFadeIn={600}
                        quality={100}
                        width={1600}
                        height={500}
                        style={{ width: "100%", minHeight: "20rem" }}
                        src="../assets/most-tanew.jpg"
                    />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <p className="text-2xl sm:text-3xl lg:text-4xl -tracking-wide font-medium mb-6">
                        Umów sie na spływ kajakiem
                    </p>
                    <Link to="/kontakt" className="btn_main">
                        Zadzwoń
                    </Link>
                </div>
            </section>
            <ImgSection />
            <OpinieSection />
            <section className="relative mt-10 min-h-[20rem] md:min-h-[30rem]">
                <iframe
                    title="mapa kajakiem po tanwi"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4938676150573!2d23.205451!3d50.394633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724abd7ab5a0b3f%3A0xa0c3f593c2feb752!2sKajakiem%20po%20Tanwi%20-%20Sp%C5%82ywy%20kajakowe%20Susiec!5e0!3m2!1spl!2spl!4v1685109043310!5m2!1spl!2spl"
                    width="600"
                    height="450"
                    style={{ border: 0, width: "100%" }}
                    allowfullscreen=""
                    loading="lazy"
                ></iframe>
            </section>
            {data.allDatoCmsSeoTekst.edges.map(({ node }) => (
                <div className="px-4 max-w-screen-lg mx-auto text-start my-12 lg:my-16">
                    <h2 className="font-medium py-2 text-lg -tracking-wide">
                        {node.title}
                    </h2>
                    <div
                        id="descriptionHtml"
                        dangerouslySetInnerHTML={{
                            __html: node.desc,
                        }}
                    />
                </div>
            ))}
        </Layout>
    );
};

export const Head = () => (
    <Seo
        title=""
        description="Zarezerwuj niezapomnianą przygodę kajakową na malowniczej Tanwi z Kajakami Tanew. Odkryj piękno otaczającej natury i rozkoszuj się aktywnym spływem. Zanurz się w niepowtarzalnych emocjach"
    />
);

export default Home;
