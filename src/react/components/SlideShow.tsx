import {RefObject, useRef, useState} from "react";
import AssetEntry from "../assets/AssetEntry.ts";

interface Assets{
    assetCollection: AssetEntry[]
}

function SlideShow({assetCollection}: Assets) {

    const [contentIndex, setContentIndex] = useState(0);
    const [videoPlaying, setVideoPlaying] = useState(false);

    const thumbnailElement: RefObject<HTMLDivElement> = useRef<HTMLDivElement>(null);

    const buttonStyle: string = "d-block position-absolute top-0 bottom-0 z-3 border-0 background-hover-black pop-animation-children";
    const buttonTextStyle: string = "h1 text-white border-2 border-primary text-shadow-test";

    function showNextImage(){
        setContentIndex(index => {
            if(index === assetCollection.length - 1) return 0;
            return index + 1;
        });
    }

    function showPreviousImage(){
        setContentIndex(index => {
           if(index === 0) return assetCollection.length - 1;
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
            <div className="w-50 min-w-300p p-0 m-0 position-relative">
                <div className={"hover-opacity-transition-parent-0"}>
                    <video onPause={() => {setVideoPlaying(false)}} onPlay={() => {setVideoPlaying(true)}} key={assetCollection[contentIndex].GetEntry("Video")} className={"video-slider w-100 h-100 position-absolute"} controls>
                        <source src={assetCollection[contentIndex].GetEntry("Video")} type="video/mp4"/>
                        Your browser doesn't support the video tag.
                    </video>
                    <div ref={thumbnailElement} className={`${videoPlaying ? "opacity-0 invisible" : "hover-opacity-transition-0"}`}
                         style={{width: '100%', display: "flex", overflow: "hidden"}}>
                        {assetCollection.map((asset: AssetEntry) => (
                            <>
                                {/*<video className={"w-100 h-100 position-absolute"} style={{translate: `${-100 * contentIndex}%`}} controls>
                            <source src={`${asset.Video}`} type="video/mp4"/>
                            Your browser doesn't support the video tag.
                        </video>*/}
                                <img className={"w-100 z-3 object-fit-cover flex-shrink-0 flex-grow-0 translate-transition"}
                                     src={`${asset.GetEntry("Image")}`} alt={""}
                                     style={{translate: `${-100 * contentIndex}%`}}/>
                            </>
                        ))}
                    </div>
                </div>
                {/*<div className={""} style={{width: '100%', display: "flex", overflow: "hidden"}}>
                    {assetCollection.map((asset: AssetEntry) => (
                        <>
                            <video className={"w-100 h-100 z-3 object-fit-cover flex-shrink-0 flex-grow-0 translate-transition"}
                                   style={{translate: `${-100 * contentIndex}%`}} controls>
                                <source src={`${asset.Video}`} type="video/mp4"/>
                                Your browser doesn't support the video tag.
                            </video>
                        </>
                    ))}
                </div>*/}
                <button onClick={() => {thumbnailPresent() ? showPreviousImage() : false}} className={`${buttonStyle} start-50np`}><p
                    className={`${buttonTextStyle}`}>{"<"}</p></button>
                <button onClick={() => {thumbnailPresent() ? showNextImage() : false}} className={`${buttonStyle} end-50np`}><p
                    className={`${buttonTextStyle}`}>{">"}</p></button>
                <div className={"position-absolute bottom-50np start-50 translate-50n d-flex gap-1 z-3"}>
                    {assetCollection.map((_asset: AssetEntry, index) => (
                        <div className={"hover-scale-transition-parent-1-2"}>
                            <button
                                className={`${index === contentIndex ? "bg-danger" : ""} p-0 w-100 min-w-25p min-h-25p rounded-circle hover-scale-transition-1-2`}
                                onClick={() => {thumbnailPresent() ? setContentIndex(index) : false}}></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SlideShow;