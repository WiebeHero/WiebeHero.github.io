import Back from "./Back.tsx";
import {JSX} from "react";

interface ALittleToLateProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function ALittleToLate({changePage}: ALittleToLateProps) {

    /*const tractorCollection: AssetEntry = AssetManager.TractorCollection;
    const figureStyle: string = "text-white fst-italic";*/

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <div className="d-flex w-75 min-w-300p text-center flex-column align-items-center">
                    <p className={"h1 text-white mt-5 pt-5"}>A Little Too Late - Texting and Driving Awareness Game</p>
                    <p className={"text-white fs-4"}>Unity | C#</p>
                    <p className={"w-85 text-white"}>A Little Too Late is a serious game developed to raise awareness about the dangers of
                        texting while driving. It highlights the risks and potential consequences of distracted driving by placing players
                        in situations where their attention is divided. Through interactive storytelling and gameplay, the project emphasizes
                        the importance of staying focused on the road.
                    </p>
                </div>
            </div>
        </>
    );
}

export default ALittleToLate;