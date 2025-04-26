import AssetManager from "../../../assets/AssetManager.ts";
import PortfolioEntry from "./PortfolioEntry.tsx";

function Portfolio(){

    const assetCollection = [AssetManager.FreezerCollection, AssetManager.ALittleToLateCollection, AssetManager.TractorCollection, AssetManager.SweetDreamsCollection];

    return (
        <>
            <div className={"container-fluid d-flex w-100 bg-primary mt-5 flex-column justify-content-center align-items-center"}>
                {assetCollection.map((asset, index) => (
                    <PortfolioEntry asset={asset} last={index + 1 === assetCollection.length}></PortfolioEntry>
                ))}
            </div>
        </>
    );

}

export default Portfolio;