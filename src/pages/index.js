import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Home = () => {
    return (
        <Layout>
            <div className="w-full min-h-[20rem] relative">
                <StaticImage
                    quality={100}
                    className="w-full h-full min-h-[20rem] object-right"
                    alt="Kajaki Po Tanwi"
                    src="../assets/hero.jpg"
                />
                <div className="absolute w-full h-full inset-0 opacity-50 bg-[#00232E]" />
                <div className="absolute w-full left-1/2 top-1/2 px-4 -translate-x-1/2 -translate-y-1/2">
                    <h1 className="uppercase orange_gradient text-2xl sm:text-3xl md:text-4xl  lg:text-6xl font-bold">
                        PRZEŻYJ PRZYGODĘ NA KAJAKU
                    </h1>
                    <p className="sm:w-1/2 lg:w-1/3 mx-auto mt-6 text-center text-gray-200 mb-6">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words
                    </p>
                    <Link className="text-white border py-1.5 px-6 rounded-2xl text-center" to="/cennik" >Cennik</Link>
                </div>
            </div>
            <div className="h-[200vh]" />
        </Layout>
    );
};

export const Head = () => <Seo title="Kajaki Po Tanwi" />;

export default Home;
