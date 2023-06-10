import React, { useState, useRef } from "react";
import { graphql, useStaticQuery } from "gatsby";
import ReactPlayer from "react-player";
import vv from "../../assets/video/vv.mp4";

const VideoSection = () => {
    const data = useStaticQuery(graphql`
        query {
            datoCmsVideo {
                desc
            }
        }
    `);

    const videoData = data.datoCmsVideo;
    const { desc } = videoData;

    const [isPlaying, setIsPlaying] = useState(false);
    const [isControls, setIsControls] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const playerRef = useRef(null);

    const handlePlay = () => {
        setIsPlaying(true);
        setIsControls(true);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        clearTimeout(timeoutId); // Zatrzymujemy poprzedniego timeouta (jeśli istnieje)
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        startTimeout(); // Rozpoczynamy nowy timeout
    };

    const handlePlayerClick = () => {
        if (isPlaying) {
            setIsPlaying(false);
            setIsControls(false);
        } else {
            setIsPlaying(false);
            setIsControls(false);
        }
    };

    const handleStop = () => {
        setIsPlaying(false);
        setIsControls(false);
    };

    const startTimeout = () => {
        const id = setTimeout(() => {
            setIsHovered(false);
        }, 100); // Czas w milisekundach (1 sekunda)
        setTimeoutId(id);
    };
    return (
        <section id="video" className="bg-[#E2E9E8] py-12 md:py-20">
            
            <div className="w-full px-4 sm:w-1/2 h-auto mx-auto rounded-md">
                <div
                    role="button"
                    tabIndex={0}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                            handlePlayerClick();
                        }
                    }}
                    style={{
                        position: "relative",
                        width: "100%",
                        height: "max-content",
                    }}
                >
                    {!isPlaying ? (
                        <div
                            style={{
                                zIndex: "30",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <button
                                title="start przycisk"
                                aria-label="start"
                                onClick={handlePlay}
                            >
                                <svg
                                    width="76"
                                    height="75"
                                    viewBox="0 0 76 75"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="38.5"
                                        cy="37.5"
                                        r="37.5"
                                        fill="black"
                                        fill-opacity="0.8"
                                    />
                                    <g clip-path="url(#clip0_1541_172)">
                                        <path
                                            d="M33 30V46C32.9999 46.1779 33.0474 46.3527 33.1374 46.5061C33.2274 46.6596 33.3567 46.7863 33.512 46.8731C33.6673 46.96 33.843 47.0038 34.0209 47.0001C34.1988 46.9964 34.3725 46.9452 34.524 46.852L47.524 38.852C47.6696 38.7625 47.7898 38.6372 47.8733 38.4881C47.9567 38.3389 48.0005 38.1709 48.0005 38C48.0005 37.8291 47.9567 37.6611 47.8733 37.5119C47.7898 37.3628 47.6696 37.2375 47.524 37.148L34.524 29.148C34.3725 29.0548 34.1988 29.0037 34.0209 28.9999C33.843 28.9962 33.6673 29.04 33.512 29.1269C33.3567 29.2137 33.2274 29.3404 33.1374 29.4939C33.0474 29.6474 32.9999 29.8221 33 30Z"
                                            fill="white"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1541_172">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                                transform="translate(27 26)"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    ) : isHovered ? (
                        <div
                            style={{
                                zIndex: "20",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                            }}
                        >
                            <button
                                title="stop przycisk"
                                aria-label="stop"
                                className="opacity-0 lg:opacity-100"
                                onClick={handleStop}
                            >
                                <svg
                                    width="76"
                                    height="75"
                                    viewBox="0 0 76 75"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        cx="38.5"
                                        cy="37.5"
                                        r="37.5"
                                        fill="black"
                                        fill-opacity="0.8"
                                    />
                                    <path
                                        d="M32.2875 27.5891C31.6078 27.8094 31.0266 28.4047 30.825 29.0891C30.7594 29.3187 30.75 30.2375 30.75 38.0047C30.75 46.3719 30.7547 46.6719 30.8391 46.9484C31.0547 47.6375 31.6453 48.2234 32.3391 48.425C32.7141 48.5328 35.5359 48.5328 35.9109 48.425C36.6047 48.2234 37.1953 47.6375 37.4109 46.9484C37.4953 46.6719 37.5 46.3719 37.5 38C37.5 29.6281 37.4953 29.3281 37.4109 29.0516C37.1953 28.3625 36.6047 27.7766 35.9109 27.575C35.7 27.5141 35.3859 27.5 34.1063 27.5047C32.7328 27.5047 32.5219 27.5141 32.2875 27.5891Z"
                                        fill="white"
                                    />
                                    <path
                                        d="M42.0375 27.5891C41.3578 27.8094 40.7766 28.4047 40.575 29.0891C40.5094 29.3187 40.5 30.2375 40.5 38.0047C40.5 46.3719 40.5047 46.6719 40.5891 46.9484C40.8047 47.6375 41.3953 48.2234 42.0891 48.425C42.4641 48.5328 45.2859 48.5328 45.6609 48.425C46.3547 48.2234 46.9453 47.6375 47.1609 46.9484C47.2453 46.6719 47.25 46.3719 47.25 38C47.25 29.6281 47.2453 29.3281 47.1609 29.0516C46.9453 28.3625 46.3547 27.7766 45.6609 27.575C45.45 27.5141 45.1359 27.5 43.8563 27.5047C42.4828 27.5047 42.2719 27.5141 42.0375 27.5891Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    ) : null}
                    <ReactPlayer
                        ref={playerRef}
                        muted
                        controls={isControls}
                        playing={isPlaying}
                        playIcon={false}
                        width="100%"
                        height="13rem"
                        className="mx-auto rounded-lg"
                        url={vv}
                        onClick={handlePlayerClick}
                        title="video tanew"
                    />
                    <p className="bg-red-600 text-white text-[12px] font-medium absolute py-1 px-3 rounded-xl -top-2 z-20 -translate-x-2 sm:top-12 left-0 sm:-translate-x-1/2">
                        VIDEO
                    </p>
                </div>
                <p className="mt-6 sm:pr-12 text-start">{desc}</p>
            </div>
        </section>
    );
};

export default VideoSection;
