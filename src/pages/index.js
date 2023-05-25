import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import VideoCom from "../components/videoCom";

import {
    HeroSection,
    CardsSection,
    EtapsSection,
    HappySection,
} from "../components/HomePage/index";

const Home = () => {
    return (
        <Layout>
            <HeroSection />
            <CardsSection />
            <EtapsSection />
            <HappySection /> 
            <VideoCom />

            <section
                id="most"
                className="relative min-h-[20rem] md:min-h-[30rem] text-white"
            >
                <div className="absolute inset-0 h-full w-full -z-10">
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

            <section className="pt-10 md:py-24">
                <div className="mb-10">
                    <p className="p_kayak">KAJAKI PO TANWI</p>
                    <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                        Wypożycz, odkrywaj, ciesz się
                    </h2>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Kajakami Po Tanwi" />;

export default Home;
