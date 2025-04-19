import {useState} from "react";
import AssetEntry from "../assets/AssetEntry.ts";

interface Assets{
    assetCollection: AssetEntry[]
}

function SlideShow({assetCollection}: Assets) {

    const [contentIndex, setContentIndex] = useState(0);
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

    return (
        <>
            <div className="w-50 min-w-325p p-0 m-0 position-relative">
                <div className={"hover-opacity-transition-parent-0"}>
                    <video key={assetCollection[contentIndex].Video} className={"video-slider w-100 h-100 position-absolute"} controls>
                        <source src={assetCollection[contentIndex].Video} type="video/mp4"/>
                        Your browser doesn't support the video tag.
                    </video>
                    <div className={"hover-opacity-transition-0"}
                         style={{width: '100%', display: "flex", overflow: "hidden"}}>
                        {assetCollection.map((asset: AssetEntry) => (
                            <>
                                {/*<video className={"w-100 h-100 position-absolute"} style={{translate: `${-100 * contentIndex}%`}} controls>
                            <source src={`${asset.Video}`} type="video/mp4"/>
                            Your browser doesn't support the video tag.
                        </video>*/}
                                <img className={"w-100 z-3 object-fit-cover flex-shrink-0 flex-grow-0 translate-transition"}
                                     src={`${asset.Image}`} alt={""}
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
                <button onClick={showPreviousImage} className={`${buttonStyle} start-50np`}><p
                    className={`${buttonTextStyle}`}>{"<"}</p></button>
                <button onClick={showNextImage} className={`${buttonStyle} end-50np`}><p
                    className={`${buttonTextStyle}`}>{">"}</p></button>
                <div className={"position-absolute bottom-50np start-50 translate-50n d-flex gap-1 z-3"}>
                    {assetCollection.map((_asset: AssetEntry, index) => (
                        <div className={"hover-scale-transition-parent-1-2"}>
                            <button
                                className={`${index === contentIndex ? "bg-danger" : ""} p-0 w-100 min-w-25p min-h-25p rounded-circle hover-scale-transition-1-2`}
                                onClick={() => setContentIndex(index)}></button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SlideShow;