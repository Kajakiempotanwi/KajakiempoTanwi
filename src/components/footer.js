import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

const Footer = () => (
    <footer className="flex-center mt-24 flex-col bg-[#262626] w-full text-white relative space-y-3">
        <StaticImage
            quality={100}
            height={75}
            width={75}
            className=" -mt-10"
            src="../assets/logoWhite.png"
        />
        <div className="flex-center flex-col">
            <p className="text-lg font-bold mb-4">Kontakt</p>
            <Link to="tel:+48732536266" className="flex-center mb-4">
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
                        fill="white"
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
                            fill="white"
                        />
                        <path
                            d="M19 4C20.08 4 21.027 4.57 21.555 5.427L12 11.797L2.44501 5.427C2.69574 5.01977 3.04022 4.6784 3.44971 4.43138C3.85921 4.18436 4.32184 4.03886 4.79901 4.007L5.00001 4H19Z"
                            fill="white"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1472_333">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>

                <p>kajakiempotanwi@wp.pl</p>
            </Link>
            <p className="text-lg font-bold mb-4 ">Media Społecznościowe</p>
            <div className="flex-center space-x-4 mb-6">
                <Link to="https://www.facebook.com/kajakiempotanwi">
                    <StaticImage
                        quality={100}
                        height={33}
                        width={33}
                        src="../assets/facebook.png"
                    />
                </Link>
                <Link to="https://www.instagram.com/kajakiempotanwi/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3KMcH9JdBcMrolmljM264sarvvk8xuibITApf9M6KBNud7tiR7egu0OZg">
                    <StaticImage
                        quality={100}
                        height={33}
                        width={33}
                        src="../assets/instagram.png"
                    />
                </Link>
            </div>
        </div>
        <div className="bg-[#464646] bg-gradient-to-tr from-[#464646] to-[#363030] w-full text-center py-2 px-4 text-sm">
            <p>
                © 2023 - Design by{" "}
                <Link
                    className="underline text-slate-200 hover:text-amber-500 duration-200 transition-colors"
                    to="https://seovileo.pl/"
                >
                    @Seovileo.pl
                </Link>{" "}
                / All rights reserved.
            </p>
        </div>
    </footer>
);

export default Footer;
