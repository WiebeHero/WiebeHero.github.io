import AssetEntry from "../../../assets/AssetEntry.ts";
import {ReactElement} from "react";

interface PortfolioEntryProps{
    asset: AssetEntry
    last: boolean
    pageTarget: ReactElement
    changePage: (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, pageNumber: number) => void;
}

function PortfolioEntry({asset, pageTarget, last, changePage}: PortfolioEntryProps) {
    return (
        <>
            <div onClick={() => {changePage(pageTarget, 2)}} className={"w-50 min-w-400p max-w-1000p max-h-300p cursor-pointer"}>
                <div className={`w-100 background-hover-gray border border-3 ${last ? "" : "border-bottom-0"} border-800 border-secondary d-flex flex-row align-items-start justify-content-start hover-scale-transition-1-2`}>
                    <img className={"w-25"} src={asset.GetContentEntry("Thumbnail")} alt={"Not found"}/>
                    <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                        <p className={"h3 text-white fs-12px0_5vw20px pt-1 m-0"}>{asset.GetContentEntry("Title")}</p>
                        <p className={"text-white fs-8px0_5vw16px text-center p-2 m-0"}>{asset.GetContentEntry("Description")}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioEntry;