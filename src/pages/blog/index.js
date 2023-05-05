import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { graphql } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import LiveBackground from "../../components/liveBackground";

const IndexPage = ({ data }) => {
    const { allDatoCmsBlog } = data;

    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative flex items-center h-[8.5rem] md:h-[15rem] overflow-hidden justify-center w-full">
                    <LiveBackground />
                    <div className="relative w-full h-full -mt-4 -z-20 ">
                        <StaticImage
                            quality={50}
                            loading="eager"
                            className="w-full h-full absolute inset-0"
                            src="../../assets/blogHero.jpg"
                            alt="projekt strona internetowa"
                        />
                        <div className="w-full h-full bg-black/70 absolute inset-0" />
                    </div>
                    <div className="absolute left-[10%] flex flex-col items-start justify-center text-white">
                        <div className="flex items-center justify-center text-sm font-semibold mt-12 md:mt-5 lg:mt-8">
                            <Link className="text-orange-500" to="/">
                                Strona Główna
                            </Link>
                            <span className="mx-2">\</span>
                            <p>Blog</p>
                        </div>
                        <h1 className="text-xl md:text-2xl">Blog</h1>
                    </div>
                </div>

                <section className="py-8 md:py-10 max-w-screen-xl px-4 md:px-6 mx-auto">
                    <div class="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-8 lg:grid-cols-3 md:gap-6 xl:gap-8">
                        {allDatoCmsBlog.edges.map(({ node }) => (
                            <div className="mx-auto">
                                <div className="relative group">
                                    <Link
                                        to={node.slug}
                                        class="relative flex h-48 items-end overflow-hidden rounded-xl bg-gray-100 shadow-xl md:h-62"
                                    >
                                        <GatsbyImage
                                            className="w-full h-full group-hover:scale-110 transition-transform duration-200"
                                            loading="eager"
                                            image={getImage(
                                                node.img.gatsbyImageData
                                            )}
                                            alt={
                                                node.img.alt ||
                                                "Strona Internetowa"
                                            }
                                        />
                                        <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                        <p className="absolute text-white text-sm rounded-xl font-medium bg-gray-900/70 py-2 px-4 bottom-2 right-4">
                                            Zobacz
                                        </p>
                                    </Link>
                                </div>

                                <div className="p-2">
                                    <h2 class="text-lg font-bold -tracking-wide capitalize text-start text-gray-800">
                                        {node.title}
                                    </h2>
                                    <div className=" bg-gradient-to-r capitalize from-amber-400 w-1/3 h-1 rounded-3xl mb-4" />
                                    <p>{node.smallDescription}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const query = graphql`
    query MyQuery {
        allDatoCmsBlog(sort: { position: ASC }) {
            edges {
                node {
                    description
                    img {
                        url
                        alt
                        gatsbyImageData(layout: FULL_WIDTH)
                    }
                    slug
                    smallDescription
                    title
                    tag {
                        description
                        title
                        twitterCard
                    }
                }
            }
        }
    }
`;

export const Head = () => <Seo title="Strona wwww" />;

export default IndexPage;
