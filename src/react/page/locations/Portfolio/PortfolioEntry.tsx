import AssetEntry from "../../../assets/AssetEntry.ts";

interface PortfolioEntryProps{
    asset: AssetEntry
    last: boolean
}

function PortfolioEntry({asset, last}: PortfolioEntryProps) {
    return (
        <>
            <div className={`w-50 min-w-450p max-w-1000p max-h-300p bg-800 border border-3 ${last ? "" : "border-bottom-0"} border-800 border-secondary d-flex flex-row align-items-start justify-content-start position-relative`}>
                <img className={"w-25"} src={asset.GetEntry("Thumbnail")} alt={"Not found"}/>
                <div className={"w-100 d-flex flex-column align-items-center"}>
                    <p className={"h3 text-white fs-12px0_5vw20px m-0"}>{asset.GetEntry("Title")}</p>
                    <p className={"text-white fs-8px0_5vw16px p-2 text-center m-0"}>{asset.GetEntry("Description")}</p>
                </div>
            </div>
        </>
    );
}

export default PortfolioEntry;