import Back from "./Back.tsx";
import {JSX} from "react";

interface SweetDreamsProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function SweetDreams({changePage}: SweetDreamsProps) {

    /*const tractorCollection: AssetEntry = AssetManager.TractorCollection;
    const figureStyle: string = "text-white fst-italic";*/

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <div className="d-flex w-75 min-w-300p text-center flex-column align-items-center">
                    <p className={"h1 text-white mt-5 pt-5"}>Sweet Dreams - Multiplayer Party Brawler</p>
                    <p className={"text-white fs-4"}>Unity | C#</p>
                    <p className={"w-85 text-white"}>Sweet Dreams is a lighthearted multiplayer party game where child-drawn monsters
                        come to life and engage in whimsical pillow fights. Designed for 2 to 4 players using controllers, the objective
                        is to outlast the competition and be the last one standing. The game blends playful art with competitive
                        gameplay, creating a fun and imaginative experience for players of all ages.
                    </p>
                </div>
            </div>
        </>
    );
}

export default SweetDreams;