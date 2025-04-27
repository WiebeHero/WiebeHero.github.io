import AssetManager from "../../../assets/AssetManager.ts";
import PortfolioEntry from "./PortfolioEntry.tsx";
import FreezerProject from "./Pages/FreezerProject.tsx";
import AssetEntry from "../../../assets/AssetEntry.ts";
import {ReactElement} from "react";
import ALittleToLate from "./Pages/ALittleToLate.tsx";
import TractorProject from "./Pages/TractorProject.tsx";
import SweetDreams from "./Pages/SweetDreams.tsx";

interface PortfolioProps{
    changePage: (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, pageNumber: number) => void;
}

function Portfolio({changePage}: PortfolioProps){

    const mapCollection: Map<AssetEntry, ReactElement> = new Map<AssetEntry, ReactElement>([
        [AssetManager.FreezerCollection, <FreezerProject changePage={changePage}></FreezerProject>],
        [AssetManager.ALittleToLateCollection, <ALittleToLate changePage={changePage}></ALittleToLate>],
        [AssetManager.TractorCollection, <TractorProject changePage={changePage}></TractorProject>],
        [AssetManager.SweetDreamsCollection, <SweetDreams changePage={changePage}></SweetDreams>]
    ]);
    const assetCollection = [AssetManager.FreezerCollection, AssetManager.ALittleToLateCollection, AssetManager.TractorCollection, AssetManager.SweetDreamsCollection];

    function constructItems(){
        let items: ReactElement[] = [];
        let index = 0;
        mapCollection.forEach((value: ReactElement, key: AssetEntry)=>{
            items.push(<PortfolioEntry asset={key} pageTarget={value} last={index + 1 === assetCollection.length} changePage={changePage}></PortfolioEntry>);
            index++;
        });
        return items;
    }

    return (
        <>
            <div className={"container-fluid d-flex w-100 mt-5 flex-column justify-content-center align-items-center position-relative"}>
                {constructItems().map((item: ReactElement)=>{
                    return item;
                })}
            </div>
        </>
    );

}

export default Portfolio;