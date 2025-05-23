import {JSX, ReactElement, RefObject, useRef, useState} from "react";
import AssetEntry from "../assets/AssetEntry.ts";
import {setContent} from "../page/locations/Portfolio/Portfolio.tsx";

interface Assets{
    favorites: Map<AssetEntry, ReactElement>
    content: Map<AssetEntry, ReactElement>
    changePage: (page: JSX.Element, pageNumber: number, ignore?: boolean) => void;
}

function SlideShow({favorites, content, changePage}: Assets) {

    const [contentIndex, setContentIndex] = useState(0);
    const [videoPlaying, setVideoPlaying] = useState(false);
    const [isBusy, setIsBusy] = useState(false);

    const thumbnailElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const buttonStyle: string = "d-block position-absolute top-0 bottom-0 z-3 border-0 background-hover-black pop-animation-children";
    const buttonTextStyle: string = "h1 text-white border-2 border-primary text-shadow-test";

    const assetEntries: AssetEntry[] = [...favorites.keys()];
    const portfolioPages: JSX.Element[] = [...favorites.values()];

    const video = useRef<HTMLVideoElement>(null);

    function pauseVideo(){
        console.log("Pausing video...");
        if(video.current === null)
            return;
        video.current.pause();
        console.log("Paused video!");
    }

    function showNextImage(){
        if(isBusy)
            return;
        setContentIndex(index => {
            if(index === assetEntries.length - 1) return 0;
            return index + 1;
        });
    }

    function showPreviousImage(){
        if(isBusy)
            return;
        setContentIndex(index => {
           if(index === 0) return assetEntries.length - 1;
           return index - 1;
        });
    }

    function thumbnailPresent(){
        if(thumbnailElement.current == null)
            return false;
        const opacity: number = Number(window.getComputedStyle(thumbnailElement.current).opacity);
        return opacity === 1;
    }

    return (
        <>
            <div className={"w-100 d-flex flex-column align-items-center mb-2"}>
                <button onClick={() => {
                    setContent(content);
                    changePage(portfolioPages[contentIndex], 2, true);
                }} className={"bg-primary border border-0 text-white rounded"}><p className={"h6 p-2 text-center m-0"}>See more...</p>
                </button>
            </div>
            <div className="w-50 min-w-200p p-0 m-0 position-relative">
                <div className={"hover-opacity-transition-parent-0"}>
                    <video ref={video} onPause={() => {
                        setVideoPlaying(false)
                    }} onPlay={() => {
                        setVideoPlaying(true)
                    }} key={assetEntries[contentIndex].GetContentEntry("Video")}
                           className={"video-slider w-100 h-100 position-absolute"} controls>
                        <source src={assetEntries[contentIndex].GetContentEntry("Video")} type="video/mp4"/>
                        Your browser doesn't support the video tag.
                    </video>
                    <div ref={thumbnailElement}
                         className={`${videoPlaying ? "opacity-0 invisible" : "hover-opacity-transition-0"}`}
                         style={{width: '100%', display: "flex", overflow: "hidden"}}>
                        {assetEntries.map((asset: AssetEntry) => (
                            <>
                                <img
                                    className={"w-100 z-3 object-fit-cover flex-shrink-0 flex-grow-0 translate-transition"}
                                    src={`${asset.GetContentEntry("Image")}`} alt={""}
                                    style={{translate: `${-100 * contentIndex}%`}}/>
                            </>
                        ))}
                    </div>
                </div>
                <button onClick={() => {
                    if(thumbnailPresent())
                        showPreviousImage();
                    else {
                        pauseVideo();
                        setVideoPlaying(false);
                        setIsBusy(true)
                        setTimeout(() => {
                            setIsBusy(false);
                            showPreviousImage();
                        }, 500);
                    }
                }} className={`${buttonStyle} start-50np`}><p
                    className={`${buttonTextStyle}`}>{"<"}</p></button>
                <button onClick={() => {
                    if(thumbnailPresent())
                        showNextImage();
                    else {
                        pauseVideo();
                        setVideoPlaying(false);
                        setIsBusy(true)
                        setTimeout(() => {
                            setIsBusy(false);
                            showNextImage();
                        }, 500);
                    }
                }} className={`${buttonStyle} end-50np`}><p
                    className={`${buttonTextStyle}`}>{">"}</p></button>
                <div className={"position-absolute bottom-50np start-50 translate-50n d-flex gap-1 z-3"}>
                    {assetEntries.map((_asset: AssetEntry, index) => (
                        <div className={"hover-scale-transition-parent-1-2"}>
                            <button
                                className={`${index === contentIndex ? "bg-danger" : ""} p-0 w-100 min-w-25p min-h-25p rounded-circle hover-scale-transition-1-2`}
                                onClick={() => {
                                    thumbnailPresent() ? setContentIndex(index) : false
                                }}></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SlideShow;