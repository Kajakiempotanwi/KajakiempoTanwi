import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";

const Galeria = () => {
    return (
        <Layout>
            <TopImg />
            <section className="pt-6 md:py-10 relative">
                <div>
                    <p className="p_kayak">Kajakiem Po Tanwi</p>
                    <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                        Galeria
                    </h2>
                    <section class="text-gray-600 body-font">
                        <div class="container px-5 py-10 mx-auto">
                            <div class="flex flex-wrap -m-4">
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            class="object-cover object-center w-full h-full block"
                                            src="https://dummyimage.com/420x260"
                                        />
                                    </a>
                                </div>
                                <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
                                    <a class="block relative h-48 rounded overflow-hidden">
                                        <img
                                            alt="ecommerce"
                                            class="object-cover object-center w-full h-full block"
                                            src="https://dummyimage.com/421x261"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Zdjęcia Kajakiem Po Tanwi" />;

export default Galeria;
