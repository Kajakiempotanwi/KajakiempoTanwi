import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg"
import { Link } from "gatsby";

const NotFoundPage = () => (
    <Layout>
        <TopImg />
        <div className="flex-center flex-col h-96">
        <p className="my-12 text-2xl font-bold text-black">Coś Poszło Nie Tak</p>
        <p className="mb-12 text-3xl font-bold text-red-700">BŁĄD 404</p>
            <Link to="/" className="btn_main">Strona Główna</Link>
            </div>
    </Layout>
);

export const Head = () => <Seo title="Strona 404" />;

export default NotFoundPage;
