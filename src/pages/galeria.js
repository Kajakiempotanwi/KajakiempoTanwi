import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";
import GaleriaImg from "../components/GaleriaPage/GaleriaImg";


const Galeria = () => {

    return (
        <Layout>
            <TopImg />
            <GaleriaImg />
        </Layout>
    );
};

export const Head = () => <Seo title="Zdjęcia" />;

export default Galeria;
