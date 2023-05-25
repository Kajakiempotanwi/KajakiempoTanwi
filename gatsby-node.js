const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions;

    const queryCards = await graphql(`
        {
            allDatoCmsCardd {
                nodes {
                    slug
                }
            }
        }
    `);

    const cardTemplate = path.resolve(`./src/templates/cardTemplate.js`);

    queryCards.data.allDatoCmsCardd.nodes.forEach((node) => {
        const { slug } = node;
        createPage({
            path: slug,
            component: cardTemplate,
            context: {
                slug,
            },
        });
    });
};
