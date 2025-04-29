import PortfolioEntry from "./PortfolioEntry.tsx";
import AssetEntry from "../../../assets/AssetEntry.ts";
import {JSX, ReactElement} from "react";

interface PortfolioProps{
    content?: Map<AssetEntry, ReactElement>
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

let contentKeep: Map<AssetEntry, ReactElement>;

function Portfolio({content, changePage}: PortfolioProps){

    if(content !== undefined)
        contentKeep = content;

    function constructItems(){
        let items: ReactElement[] = [];
        let index = 0;
        contentKeep.forEach((value: ReactElement, key: AssetEntry)=>{
            items.push(<PortfolioEntry asset={key} pageTarget={value} last={index + 1 === contentKeep.size} changePage={changePage}></PortfolioEntry>);
            index++;
        });
        return items;
    }

    return (
        <>
            <div className={"container-fluid d-flex w-100 mt-5 pt-5 mb-5 pb-5 flex-column justify-content-center align-items-center position-relative"}>
                {constructItems().map((item: ReactElement)=>{
                    return item;
                })}
            </div>
        </>
    );

}

function setContent(content: Map<AssetEntry, JSX.Element>){
    contentKeep = content;
}

export {Portfolio, setContent};