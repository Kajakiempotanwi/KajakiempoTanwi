import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Kontakt = () => {
    return (
        <Layout>
            <TopImg />
            <section class="text-gray-700 body-font relative max-w-screen-xl mx-auto rounded-lg overflow-hidden mt-0 md:mt-12 lg:mt-24">
                <div class="absolute inset-0 bg-gray-300">
                    <iframe
                        width="100%"
                        height="100%"
                        frameborder="0"
                        marginheight="0"
                        marginwidth="0"
                        title="mapa"
                        loading="eager"
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.4938676150573!2d23.205451!3d50.394633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4724abd7ab5a0b3f%3A0xa0c3f593c2feb752!2sKajakiem%20po%20Tanwi%20-%20Sp%C5%82ywy%20kajakowe%20Susiec!5e0!3m2!1spl!2spl!4v1685109043310!5m2!1spl!2spl"
                        style={{
                            filter: "grayscale(0) contrast(1.2) opacity(0.6)",
                        }}
                    ></iframe>
                </div>
                <div class="container px-5 py-12 lg:py-16 mx-auto flex">
                    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
                        
                        <div className="flex-center flex-col">
                            <h1 className="text-lg font-bold">
                            Jesteśmy Dostępni 7 dni w tygodniu
                    </h1>
                    <p className="text-green-700 font-bold my-3">Pon. – Nd. od 8 do 17</p>
                    <p className="mb-3">Obsługujemy klientów indywidualnych jak i grupy zorganizowane</p>
                            <Link
                                to="tel:+48732536266"
                                className="flex-center mb-4"
                            >
                                <svg
                                    width="18"
                                    height="18"
                                    className="mr-2"
                                    viewBox="0 0 18 18"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M2.12109 0.573968C2.31793 0.377409 2.55429 0.22493 2.81451 0.126636C3.07473 0.0283423 3.35287 -0.013522 3.6305 0.00381754C3.90812 0.0211571 4.17889 0.0973045 4.42486 0.227214C4.67083 0.357123 4.88639 0.537827 5.05725 0.757351L7.07656 3.35172C7.44667 3.82762 7.57717 4.44752 7.43092 5.03255L6.81557 7.49641C6.78375 7.62402 6.78547 7.7577 6.82056 7.88445C6.85564 8.01121 6.9229 8.12673 7.01581 8.21982L9.77985 10.9841C9.87304 11.0772 9.98875 11.1446 10.1157 11.1796C10.2427 11.2147 10.3766 11.2164 10.5043 11.1843L12.9669 10.5689C13.2556 10.4967 13.5569 10.4911 13.848 10.5525C14.1392 10.6139 14.4126 10.7407 14.6476 10.9233L17.2417 12.9417C18.1743 13.6673 18.2598 15.0455 17.4251 15.8792L16.2619 17.0425C15.4294 17.875 14.1852 18.2407 13.0254 17.8323C10.0568 16.7877 7.36148 15.0881 5.13937 12.8595C2.91114 10.6376 1.21168 7.94245 0.167025 4.97404C-0.240213 3.81524 0.125401 2.56981 0.957875 1.73727L2.12109 0.573968Z"
                                        fill="black"
                                    />
                                </svg>

                                <p>+48 732 536 266</p>
                            </Link>
                            <Link
                                to="mailto:kajakiempotanwi@wp.pl"
                                className="flex-center mb-4"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="mr-2"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1472_333)">
                                        <path
                                            d="M22 7.53491V16.9999C22 17.7651 21.7077 18.5014 21.1827 19.0582C20.6578 19.6149 19.9399 19.95 19.176 19.9949L19 19.9999H5C4.23479 20 3.49849 19.7076 2.94174 19.1826C2.38499 18.6577 2.04989 17.9398 2.005 17.1759L2 16.9999V7.53491L11.445 13.8319L11.561 13.8979C11.6977 13.9647 11.8478 13.9994 12 13.9994C12.1522 13.9994 12.3023 13.9647 12.439 13.8979L12.555 13.8319L22 7.53491Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M19 4C20.08 4 21.027 4.57 21.555 5.427L12 11.797L2.44501 5.427C2.69574 5.01977 3.04022 4.6784 3.44971 4.43138C3.85921 4.18436 4.32184 4.03886 4.79901 4.007L5.00001 4H19Z"
                                            fill="black"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1472_333">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="black"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>

                                <p>kajakiempotanwi@wp.pl</p>
                            </Link>
                            <Link
                                to="https://goo.gl/maps/6T3yMfNiEXggfGVi8?coh=178572&entry=tt"
                                className="flex-center mb-4"
                            >
                                <svg
                                    width="24"
                                    height="24"
                                    className="mr-2"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1527_168)">
                                        <path
                                            d="M10.5938 0.093717C9.63751 0.25778 9.03751 0.440592 8.17969 0.834342C7.19532 1.28434 6.40313 1.84215 5.59688 2.64372C3.24376 4.99684 2.41407 8.19372 3.25782 11.6578C3.98438 14.6531 5.90157 17.9156 8.94376 21.3515C9.75469 22.2609 11.3016 23.7843 11.5406 23.8968C11.8125 24.0328 12.1828 24.0328 12.45 23.9062C12.7734 23.7468 14.4469 21.9937 15.6375 20.5547C18.6234 16.9593 20.4609 13.5093 20.9484 10.5937C21.15 9.37966 21.0797 7.86091 20.7656 6.72184C20.325 5.11872 19.5656 3.8109 18.4031 2.64372C16.9875 1.23278 15.3141 0.38903 13.2844 0.074967C12.6234 -0.028158 11.25 -0.018783 10.5938 0.093717ZM13.1859 4.94059C14.7516 5.40934 15.9328 6.71247 16.2188 8.29216C16.2938 8.71872 16.2844 9.47809 16.1953 9.91403C16.1156 10.3031 15.8625 10.95 15.6656 11.2734C15.4266 11.6625 15.0234 12.1125 14.6531 12.4031C12.6328 14.0062 9.70313 13.4765 8.32501 11.264C7.71094 10.275 7.55157 8.82653 7.93126 7.71091C8.30626 6.61872 9.10782 5.70934 10.1484 5.19372C10.7625 4.88434 11.3016 4.78122 12.1172 4.79997C12.6563 4.81403 12.8484 4.83747 13.1859 4.94059Z"
                                            fill="black"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1527_168">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="black"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="mr-2">
                                    Huta Szumy 56, 22-672 Huta Szumy
                                </p>
                            </Link>
                            <p className="text-lg font-bold mb-4 ">
                                Media Społecznościowe
                            </p>
                            <div className="flex-center space-x-4 mb-6">
                                <Link
                                    aria-label="Facebook"
                                    to="https://www.facebook.com/kajakiempotanwi"
                                >
                                    <StaticImage
                                    alt="facebook"
                                    title="facebook"
                                        quality={100}
                                        height={33}
                                        width={33}
                                        durationFadeIn={600}
                                        src="../assets/facebook.png"
                                    />
                                </Link>
                                <Link
                                    aria-label="Instagram"
                                    to="https://www.instagram.com/kajakiempotanwi/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3KMcH9JdBcMrolmljM264sarvvk8xuibITApf9M6KBNud7tiR7egu0OZg"
                                >
                                    <StaticImage
                                    alt="instagram"
                                    title="instagram"
                                        quality={100}
                                        height={33}
                                        durationFadeIn={600}
                                        width={33}
                                        src="../assets/instagram.png"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export const Head = () => <Seo title="Kontakt" />;

export default Kontakt;
