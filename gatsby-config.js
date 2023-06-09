/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/kajakigatsby",
    siteMetadata: {
        title: `Kajaki Tanew - Ekscytujące spływy kajakowe`,
        description: `Zobacz najlepsze oferty spływów kajakowych na rzece Tanew. Sprawdź dostępne trasy, terminy i ceny. Zaplanuj aktywny wypoczynek na wodzie z rodziną i przyjaciółmi`,
        author: `Kajaki Tanew`,
        siteUrl: `https://tanewkajaki.pl`,
    },
    plugins: [
        `gatsby-plugin-sitemap`,
        `gatsby-plugin-robots-txt`,
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                apiToken: `351f1338e7af25eda125e539bff08c`,
                environment: `main`,
                previewMode: false,
                disableLiveReload: false,
                pageSize: 500,
            },
        },
        "gatsby-plugin-postcss",
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `src`,
                path: `${__dirname}/src`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Kajaki Po Tanwi`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#0C0904`,
                theme_color: `#0C0904`,
                display: `standalone`,
                icon: `./src/assets/favicon.png`,
            },
        },
    ],
};
