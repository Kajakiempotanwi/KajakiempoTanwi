import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

import TopImg from "../components/topImg"
import { Link } from "gatsby";

const Admin = () => {
    return (
        <Layout>
            <TopImg />
            <div className="flex-center h-96">
            <Link to="https://kajakitanwi.admin.datocms.com/editor" className="btn_main">Panel CMS</Link>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="" />;

export default Admin;
