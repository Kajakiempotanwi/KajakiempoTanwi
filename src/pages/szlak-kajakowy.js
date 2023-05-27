import React, { useState } from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";
import TopImg from "../components/topImg";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const SzlakKajakowy = () => {
    const [showMap, setMap] = useState(false);
    const handleMap = () => setMap(true);
    return (
        <Layout>
            <TopImg />
            <div className="mb-6 mt-10 md:my-16">
                <p className="p_kayak">Kajakiem Po Tanwi</p>
                <h2 className="font-bold text-lg lg:text-xl text-gray-700">
                    Paary - Huta Szumy
                </h2>
            </div>
            <div className="flex flex-col md:flex-row mx-auto max-w-screen-2xl">
                <div className="w-full lg:w-4/6 md:mx-10 lg:mx-24 rounded-lg">
                    <StaticImage
                        quality={100}
                        className="w-full object-contain"
                        src="../assets/mapaszlak.jpg"
                    />
                    <p className="text-sm text-start font-medium px-2 text-[#1A6873]">
                        Trasa: Paary - Huta Szumy 7km
                    </p>

                    <div className="flex flex-col md:flex-row mt-4 md:my-10 text-start">
                        <div className="w-full lg:w-2/6 rounded-lg mb-6 px-4">
                            <div className="flex items-center justify-start">
                                <svg
                                    className="mr-2"
                                    width="33"
                                    height="33"
                                    viewBox="0 0 33 33"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1473_584)">
                                        <path
                                            d="M22 8.34903C23.6578 9.3062 25.0371 10.6794 26.0017 12.333C26.9662 13.9865 27.4824 15.8632 27.4995 17.7774C27.5165 19.6916 27.0337 21.5772 26.0987 23.2476C25.1638 24.9181 23.8091 26.3156 22.1686 27.3021C20.5281 28.2886 18.6585 28.8299 16.7447 28.8725C14.8308 28.9151 12.939 28.4575 11.2562 27.545C9.57345 26.6325 8.15793 25.2966 7.14959 23.6694C6.14126 22.0422 5.57503 20.18 5.50688 18.2669L5.5 17.875L5.50688 17.4832C5.57452 15.5867 6.13163 13.74 7.12407 12.1225C8.11652 10.505 9.51053 9.17179 11.1706 8.25241C12.8307 7.33303 14.7004 6.85875 16.598 6.87568C18.4956 6.89261 20.3566 7.40017 22 8.34903ZM16.5 12.375C16.1353 12.375 15.7856 12.5199 15.5277 12.7778C15.2699 13.0356 15.125 13.3854 15.125 13.75V17.875L15.1346 18.0359C15.174 18.3704 15.3348 18.6788 15.5865 18.9025C15.8382 19.1263 16.1632 19.25 16.5 19.25H19.25L19.4109 19.2404C19.7453 19.201 20.0537 19.0402 20.2775 18.7885C20.5013 18.5369 20.625 18.2118 20.625 17.875L20.6154 17.7142C20.576 17.3797 20.4152 17.0713 20.1635 16.8475C19.9118 16.6237 19.5868 16.5001 19.25 16.5H17.875V13.75L17.8654 13.5892C17.826 13.2547 17.6652 12.9463 17.4135 12.7225C17.1618 12.4987 16.8368 12.3751 16.5 12.375Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M8.81653 4.38767C9.0993 4.17768 9.45188 4.08421 9.80155 4.12655C10.1512 4.16888 10.4713 4.34379 10.6958 4.61519C10.9203 4.8866 11.0321 5.2338 11.0081 5.5852C10.9841 5.9366 10.8262 6.2654 10.5669 6.50379L10.4335 6.61379L6.65227 9.36379C6.3696 9.57708 6.01554 9.67308 5.66384 9.63181C5.31214 9.59054 4.98992 9.41517 4.76431 9.14223C4.53869 8.86929 4.42707 8.51984 4.45271 8.16665C4.47834 7.81347 4.63924 7.48379 4.9019 7.24629L5.03527 7.13629L8.81653 4.38767Z"
                                            fill="black"
                                        />
                                        <path
                                            d="M22.2627 4.69153C22.4596 4.42069 22.7486 4.23102 23.0754 4.15811C23.4022 4.0852 23.7444 4.13407 24.0378 4.29553L24.1835 4.38766L27.9648 7.13766C28.2476 7.34333 28.4414 7.64902 28.5068 7.99253C28.5722 8.33604 28.5042 8.69156 28.3168 8.98675C28.1293 9.28194 27.8365 9.49462 27.4978 9.58152C27.1591 9.66842 26.8 9.62301 26.4935 9.45453L26.3478 9.36241L22.5666 6.61241C22.4206 6.50614 22.2969 6.37217 22.2027 6.21812C22.1085 6.06408 22.0456 5.89299 22.0175 5.71462C21.9894 5.53625 21.9967 5.35409 22.039 5.17855C22.0813 5.00301 22.1564 4.83752 22.2627 4.69153Z"
                                            fill="black"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1473_584">
                                            <rect
                                                width="33"
                                                height="33"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className="font-bold">2,5 godziny</p>
                            </div>

                            <div className="flex items-center justify-start ml-1 my-2">
                                <svg
                                    className="mr-3"
                                    width="25"
                                    height="25"
                                    viewBox="0 0 25 25"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.1979 0.457032L0.78125 8.79037C0.537632 8.98542 0.340946 9.23271 0.205723 9.51397C0.0705005 9.79523 0.000195021 10.1033 0 10.4154V22.9154L0.0125001 23.1487C0.0540449 23.5192 0.194237 23.8717 0.418453 24.1695C0.64267 24.4674 0.942696 24.6996 1.28724 24.842C1.63178 24.9843 2.0082 25.0316 2.37726 24.979C2.74631 24.9263 3.09447 24.7755 3.38542 24.5424L12.5 17.2487L21.6146 24.5404C21.9209 24.7856 22.2902 24.9394 22.6801 24.9839C23.0699 25.0285 23.4644 24.962 23.8182 24.7922C24.1719 24.6224 24.4705 24.3562 24.6796 24.0241C24.8887 23.6921 24.9998 23.3078 25 22.9154V10.4154C24.9998 10.1033 24.9295 9.79523 24.7943 9.51397C24.6591 9.23271 24.4624 8.98542 24.2187 8.79037L13.8021 0.457032C13.4326 0.161191 12.9733 0 12.5 0C12.0267 0 11.5674 0.161191 11.1979 0.457032Z"
                                        fill="black"
                                    />
                                </svg>

                                <p className="font-bold">początkujący</p>
                            </div>

                            <div className="flex items-center justify-start ml-1">
                                <svg
                                    className="mr-2"
                                    width="30"
                                    height="30"
                                    viewBox="0 0 30 30"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M3.75 21.25L8.75 26.25"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M8.75 21.25L3.75 26.25"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M21.25 3.75L26.25 8.75"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M26.25 3.75L21.25 8.75"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17.5 6.25C16.837 6.25 16.2011 6.51339 15.7322 6.98223C15.2634 7.45107 15 8.08696 15 8.75V21.25C15 21.913 14.7366 22.5489 14.2678 23.0178C13.7989 23.4866 13.163 23.75 12.5 23.75"
                                        stroke="black"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>

                                <p className="font-bold">7 km</p>
                            </div>
                        </div>
                        <div className="w-full lg:w-4/6 rounded-lg ">
                            <p className="px-4">
                                Proponowana przez naszą
                                firmę trasa Paary - Huta Szumy jest uznanawana
                                za jeden z najpiękniejszych odcinków na
                                Roztoczu. Rzeka Tanew na tym odcinku, że względu
                                na górski charakter, wyróżnia się dużą ilością
                                zakrętów, powalonych drzew oraz głębokością nie
                                przekraczającą 1m. Trasa w większości prowadzi
                                przez las z dala od ulic co zapewnia ciszę i
                                spokój a także przy odrobinie szczęścia pozwala
                                zaobserwować zwierzęta takie jak bobry w
                                naturalnym środowisku.
                            </p>
                            <p className="px-4 text-lg font-medium my-5">
                                Miejsce Zbiórki:
                            </p>
                            <div className="relative lg:mx-4">
                                <div
                                    className={
                                        !showMap
                                            ? "absolute inset-0 bg-green-900/40 w-full h-full flex-center text-center"
                                            : "hidden"
                                    }
                                >
                                    <button
                                        aria-label="włacz mape"
                                        title="włacz mape"
                                        onClick={handleMap}
                                    >
                                        <p className="text-white font-medium bg-black/60 py-8 px-4 rounded-full text-sm">
                                            Zobacz <br /> Street View
                                        </p>
                                    </button>
                                </div>

                                <iframe
                                    title="mapa 3d kajakiem po tanwi"
                                    src="https://www.google.com/maps/embed?pb=!4v1685110045784!6m8!1m7!1sIr6pXzsXk_PFO5IC_0r6AA!2m2!1d50.39376715238909!2d23.20725231533712!3f241.48075538551154!4f-5.7408150949017624!5f0.7820865974627469"
                                    style={{
                                        border: 0,
                                        margin: "30px 0",
                                        width: "100%",
                                        height: "300px",
                                    }}
                                    allowfullscreen=""
                                    loading="eager"
                                    referrerpolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>

                            <p className="px-4">
                                Dołącz do naszej wycieczki po trasie Paary -
                                Huta Szumy i odkryj piękno natury w wyjątkowy
                                sposób. Nie zwlekaj, zarezerwuj miejsce już dziś
                                i dołącz do naszego zespołu
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-2/6 md:mx-10 my-10 lg:my-0 text-start px-4">
                    <div className="border p-5 rounded-lg mb-6">
                        <p className="font-bold text-xl text-[#4B4B4B]">
                            Dołacz do nas:
                        </p>
                        <div className="space-x-4 my-3">
                            <Link
                                aria-label="Facebook"
                                to="https://www.facebook.com/kajakiempotanwi"
                            >
                                <StaticImage
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../assets/facebook.png"
                                />
                            </Link>
                            <Link
                                aria-label="Instagram"
                                to="https://www.instagram.com/kajakiempotanwi/?igshid=ZGUzMzM3NWJiOQ%3D%3D&fbclid=IwAR3KMcH9JdBcMrolmljM264sarvvk8xuibITApf9M6KBNud7tiR7egu0OZg"
                            >
                                <StaticImage
                                    quality={100}
                                    height={33}
                                    width={33}
                                    src="../assets/instagram.png"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg bg-yellow-100">
                        <p className="font-bold text-xl text-[#4B4B4B]">
                            Obsługujemy klientów indywidualnych jak i grupy
                            zorganizowane
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export const Head = () => <Seo title="Szlak Kajakowy" />;

export default SzlakKajakowy;
