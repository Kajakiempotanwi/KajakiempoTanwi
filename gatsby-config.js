/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
    pathPrefix: "/kajakigatsby",
    siteMetadata: {
        title: `Kajaki Po Tanwi`,
        description: ``,
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
                apiToken: `b7034332f28b2c0211b44f84c07c74`,
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
                icon: `src/assets/logoBrowser.png`,
            },
        },
    ],
};
