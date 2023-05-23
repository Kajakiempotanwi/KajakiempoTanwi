import React from 'react';
import { useStaticQuery, graphql } from "gatsby";

import Header from "./nav";
import Footer from "./footer";

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Seovileo`} />
            <main className="w-full overflow-hidden main text-center">{children}</main>

            <Footer />
        </>
    );
};

export default Layout;
