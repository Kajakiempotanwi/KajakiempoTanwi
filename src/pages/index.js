import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
    return (
        <Layout>
        <div className="w-full min-h-[25rem] relative">
            <StaticImage quality={100} className="w-full h-full min-h-[25rem] object-right" alt="Kajaki Po Tanwi" src="../assets/hero.jpg" />
            <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
        </div>
            <div className="h-[200vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Kajaki Po Tanwi" />;

export default Home;
