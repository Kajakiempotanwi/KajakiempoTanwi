import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg"

const SzlakKajakowy = () => {
    return (
        <Layout>
            <TopImg />
        </Layout>
    );
};

export const Head = () => <Seo title="Szlak Kajakowy" />;

export default SzlakKajakowy;
