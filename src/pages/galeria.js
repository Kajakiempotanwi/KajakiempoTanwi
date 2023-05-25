import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg"


const Galeria = () => {
    return (
        <Layout>
            <TopImg />
        </Layout>
    );
};

export const Head = () => <Seo title="Zdjęcia Kajakiem Po Tanwi" />;

export default Galeria;
