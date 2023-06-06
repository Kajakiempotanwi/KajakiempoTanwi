import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const HappySection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsHappyicon {
                stitle
                title
                zalety {
                    hdesc
                    id
                }
            }
        }
    `);

    const happyData = data.datoCmsHappyicon;
    const { stitle, title, zalety } = happyData;
    return (
        <section id="happy" className="py-10 md:py-16">
            <div className="mb-3">
                <p className="p_kayak">{stitle}</p>
                <h3 className="font-bold text-lg lg:text-xl text-gray-700">
                    {title}
                </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 max-w-screen-md mx-auto text-start  px-5 sm:pl-[12%] lg:pl-[6%]">
                {zalety.map((item, id) => (
                    <div
                        key={id}
                        className="flex items-center justify-center sm:justify-start"
                    >
                        <div className="flex-center sm:flex-row mt-2">
                            <div>
                                <svg
                                    className="mr-2"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 40 40"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <g clip-path="url(#clip0_1471_168)">
                                        <path
                                            d="M34.875 21.9383C35.1513 19.8225 34.9728 17.6722 34.3517 15.6308C33.7305 13.5895 32.6809 11.7043 31.2729 10.101C29.8649 8.49771 28.131 7.21334 26.187 6.33369C24.2431 5.45404 22.1337 4.99935 20 5C16.0218 5 12.2064 6.58035 9.3934 9.3934C6.58035 12.2064 5 16.0218 5 20C5 23.9782 6.58035 27.7936 9.3934 30.6066C12.2064 33.4196 16.0218 35 20 35"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M15 16.6667H15.0167"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M25 16.6667H25.0167"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M15.8333 25C16.93 26.0667 18.4333 26.6667 20 26.6667C21.5667 26.6667 23.07 26.0667 24.1667 25"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M25 31.6667L28.3333 35L35 28.3333"
                                            stroke="black"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1471_168">
                                            <rect
                                                width="40"
                                                height="40"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                            <p className="px-3">{item.hdesc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HappySection;
