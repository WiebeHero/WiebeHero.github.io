import AssetEntry from "../../../assets/AssetEntry.ts";

interface PortfolioEntryProps{
    asset: AssetEntry
    last: boolean
}

function PortfolioEntry({asset, last}: PortfolioEntryProps) {
    return (
        <>
            <div className={"w-50 min-w-400p max-w-1000p max-h-300p"}>
                <div className={`w-100 bg-800 border border-3 ${last ? "" : "border-bottom-0"} border-800 border-secondary d-flex flex-row align-items-start justify-content-start hover-scale-transition-1-2`}>
                    <img className={"w-25"} src={asset.GetEntry("Thumbnail")} alt={"Not found"}/>
                    <div className={"w-100 d-flex flex-column align-items-center justify-content-center"}>
                        <p className={"h3 text-white fs-12px0_5vw20px pt-1 m-0"}>{asset.GetEntry("Title")}</p>
                        <p className={"text-white fs-8px0_5vw16px text-center p-2 m-0"}>{asset.GetEntry("Description")}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PortfolioEntry;