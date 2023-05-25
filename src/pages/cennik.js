import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import TopImg from "../components/topImg"

const Cennik = () => {
    return (
        <Layout>
            <TopImg />
        </Layout>
    );
};

export const Head = () => <Seo title="Cennik Wypożyczenia Kajaków" />;

export default Cennik;
