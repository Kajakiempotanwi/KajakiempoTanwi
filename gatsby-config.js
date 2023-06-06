/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/kajakigatsby",
    siteMetadata: {
        title: `Kajaki Tanew - Ekscytujące przygody, spływy kajakowe`,
        description: `Zaplanuj niezapomnianą przygodę na wodach Tanwi z naszymi kajakami, Odkryj piękno natury i ciesz się aktywnym spływem Zarezerwuj i zanurz się w emocjach`,
        author: `Seovileo`,
        siteUrl: `https://seovileo.pl/`,
    },
    plugins: [
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

        {
            resolve: `gatsby-omni-font-loader`,
            options: {
                enableListener: true,
                preconnect: [
                    `https://fonts.googleapis.com`,
                    `https://fonts.gstatic.com`,
                ],
                web: [
                    {
                        name: `Open Sans`,
                        file: `https://fonts.googleapis.com/css2?family=Coming+Soon&family=Open+Sans:wght@400;500;600;700&display=swap'`,
                    },
                ],
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
