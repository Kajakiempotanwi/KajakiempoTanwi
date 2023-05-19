import * as React from "react";
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
        <div className="main">
            <Header siteTitle={data.site.siteMetadata?.title || `Seovileo`} />
            <main className="w-full overflow-hidden">{children}</main>

            <Footer />
        </div>
    );
};

export default Layout;
