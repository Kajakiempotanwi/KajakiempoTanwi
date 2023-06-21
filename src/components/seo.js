import React from "react";
import { useStaticQuery, graphql } from "gatsby";

function Seo({ description, title, children }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;
    const defaultTitle = site.siteMetadata?.title;

    return (
        <>
            <title>{defaultTitle ? `${title} ${defaultTitle}` : title}</title>
            <meta name="description" content={metaDescription} />
            <meta property="og:title" content={title || `Kajaki Tanew`} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:type" content="website" />
            <meta name="robots" content="index, follow" />

            <meta
                name="twitter:creator"
                content={site.siteMetadata?.author || `Kajaki Tanew`}
            />
            <meta name="twitter:title" content={title || `Kajaki Tanew`} />
            <meta name="twitter:description" content={metaDescription} />
            <meta
                name="google-site-verification"
                content="nlnbRhWiTlYTzJ5wpZH0zCyWx02infWWgf2PioN19Ms"
            />
            {children}
        </>
    );
}

export default Seo;
