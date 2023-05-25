import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg"

const NotFoundPage = () => (
    <Layout>
        <TopImg />
    </Layout>
);

export const Head = () => <Seo title="Strona 404" />;

export default NotFoundPage;
