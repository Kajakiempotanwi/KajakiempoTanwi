import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import {
    HeroSection,
    CardsSection,
    EtapsSection,
    HappySection,
    VideoSection,
    ImgSection,
} from "../components/HomePage/index";

const Home = () => {
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
                        quality={100}
                        style={{ width: "100%", minHeight: "20rem" }}
                        src="../assets/most.jpg"
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
        </Layout>
    );
};

export const Head = () => <Seo title="Kajakami Po Tanwi" />;

export default Home;
