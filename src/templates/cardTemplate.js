import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql, Link } from "gatsby";

import "../styles/template.css";

const CardTemplate = ({
    pageContext: { slug },
    data: { datoCmsCardd, allDatoCmsCardd },
}) => {
    return (
        <Layout>
            <div className="overflow-hidden w-full z-10">
                <div className="relative object-bottom flex items-center min-h-[12rem] max-h-[13rem] overflow-hidden justify-center w-full">
                    <div className="w-full -mt-4 -z-20">
                        <GatsbyImage
                            className="w-full h-full object-cover object-center absolute inset-0"
                            image={getImage(datoCmsCardd.img)}
                            alt={datoCmsCardd.title}
                        />
                        <div className="w-full h-full bg-gray-800/80 absolute top-0 left-0" />
                    </div>
                </div>

                <section class="container -mt-32 lg:-mt-24 px-3 mx-auto">
                    <section class=" mb-6 md:mb-12 text-gray-800">
                        <div class="container mx-auto xl:px-32 text-start lg:text-left">
                            <div class="flex flex-col lg:flex-row items-center md:items-start">
                                <div className="lg:py-12 md:px-12 lg:-mr-14">
                                    <GatsbyImage
                                        className="h-72 w-72 xl:py-64 xl:px-64 rounded-xl shadow-lg"
                                        image={getImage(datoCmsCardd.img)}
                                        alt={datoCmsCardd.title}
                                    />
                                    <div className="flex items-start justify-end mx-3 space-x-4 my-4"></div>
                                </div>
                                <div class="pl-2">
                                    <div class="block mt-1 lg:mt-20 -tracking-wide rounded-lg py-3 lg:py-12 md:px-12 lg:-mr-14 text-start">
                                        <h1 class="text-3xl font-bold capitalize pb-2 mb-5">
                                            {datoCmsCardd.title}
                                        </h1>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                                {datoCmsCardd.bdesc}
                                        </p>
                                        <p class="text-gray-700 text-lg mb-4 pb-2">
                                            <div
                                                id="descriptionHtml"
                                                dangerouslySetInnerHTML={{
                                                    __html: datoCmsCardd.desc,
                                                }}
                                            />
                                        </p>

                                        <Link
                                            to="/szlak-kajakowy"
                                            type="button"
                                            class="btn_main my-1 mr-4"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Trasy
                                        </Link>

                                        <Link
                                            to="/kontakt"
                                            class="btn_main my-1"
                                            data-mdb-ripple="true"
                                            data-mdb-ripple-color="light"
                                        >
                                            Kontakt
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>

                <section className="mt-2 mb-16 max-w-screen-xl mx-auto">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 xl:ml-32">
                        {allDatoCmsCardd.edges.map(({ node }) => (
                            <div className="flex mx-6 flex-row items-center justify-start m-0 gap-4 lg:gap-6 text-start">
                                <Link
                                    to={`/` + node.slug}
                                    className="group w-24 h-24 md:w-24 lg:w-40 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
                                >
                                    <GatsbyImage
                                        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                                        image={getImage(
                                            node.img.gatsbyImageData
                                        )}
                                        alt={node.title}
                                    />
                                </Link>

                                <div className="flex flex-col gap-2">
                                    <h2 className="text-gray-800 w-full md:w-[70%] text-xl font-bold">
                                        <Link
                                            to={`/` + node.slug}
                                            className="hoverLink active:text-gray-900 capitalize transition duration-100"
                                        >
                                            {node.title}
                                        </Link>
                                    </h2>

                                    <p className="text-gray-500 text-sm w-full capitalize md:w-[70%]">
                                        {node.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export const Head = ({ data: { datoCmsCardd } }) => (
    <Seo title={datoCmsCardd.title} />
);

export default CardTemplate;

export const query = graphql`
    query MyQuery($slug: String) {
        datoCmsCardd(slug: { eq: $slug }) {
            desc
            bdesc
            title
            slug
            img {
                gatsbyImageData
            }
        }
        allDatoCmsCardd {
            edges {
                node {
                    title
                    desc
                    slug
                    img {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
