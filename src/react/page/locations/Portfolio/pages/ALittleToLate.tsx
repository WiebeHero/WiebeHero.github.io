import Back from "./Back.tsx";
import {JSX} from "react";
import TitleSection from "./components/TitleSection.tsx";
import ContentSection from "./components/ContentSection.tsx";
import AssetManager from "../../../../assets/AssetManager.ts";
import AssetEntry from "../../../../assets/AssetEntry.ts";

interface ALittleToLateProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function ALittleToLate({changePage}: ALittleToLateProps) {

    const collection: AssetEntry = AssetManager.ALittleToLateCollection;
    const figureStyle: string = "text-white fst-italic";

    //General Info
    const title = "A Little Too Late - Texting and Driving Awareness Game";
    const platform = "Unity | C#";
    const description = <>
        A Little Too Late is a serious game developed to raise awareness about the dangers of
        texting while driving. It highlights the risks and potential consequences of distracted driving by placing players
        in situations where their attention is divided. Through interactive storytelling and gameplay, the project emphasizes
        the importance of staying focused on the road.
    </>;

    //Terrain Generator
    const cTG = <>
        <p className={"text-white text-center"}>
            This system also allowed for dynamic content placement. Additional elements—such as road segments featuring a
            speed sign, or others populated with characters like a grandmother and children—could be introduced seamlessly to
            enhance gameplay variety and extend the experience.
        </p>
        <p className={"text-white text-center"}>
            One of the most interesting aspects of this project is the approach we took with the road system. Instead of
            moving the car through a static environment, we created the illusion of movement by shifting the road itself.
            The road is composed of three primary segments, which are continuously recycled: once a segment moves out of the player's
            view, it is repositioned at the front to maintain the illusion of an endless road (Figure 1).
        </p>
        <p className={"text-white text-center"}>
            This approach served two key purposes. First, it provided the flexibility to expand the gameplay with a variety
            of modular road pieces, which wouldn't have been feasible with a static layout. Second, it addressed hardware
            limitations at the time. Visual effects such as fog were taxing on our systems, so minimizing the number of active
            meshes significantly improved performance.
        </p>
    </>;
    const cLeftTG = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={collection.GetContentEntry("TerrainGenerator")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 1, Terrain Generator.</figcaption>
        </figure>
    </>;
    const cRightTG = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-65"} src={collection.GetContentEntry("CSTG")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 2, Terrain Generator code snippet.</figcaption>
        </figure>
    </>;

    //Texts
    const cT = <>
        <p className={"text-white text-center"}>
            The in-game phone is controlled by a script that manages incoming text messages, primarily from a character named Chad.
            These messages are designed to serve as a distraction, drawing the player's attention away from the road and adding a layer
            of challenge to the gameplay.

        </p>
        <p className={"text-white text-center"}>
            The texting system operates on a timed basis, periodically triggering new messages accompanied by subtle animations to
            simulate real phone notifications (Figure 3). This mechanic reinforces the game’s theme by encouraging players to manage distractions
            while maintaining control of their vehicle.
        </p>
    </>;
    const cLeftT = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={collection.GetContentEntry("Texting")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 3, Terrain Generator.</figcaption>
        </figure>
    </>;
    const cRightT = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-75"} src={collection.GetContentEntry("CST")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 4, Terrain Generator code snippet.</figcaption>
        </figure>
    </>;

    //Crashing
    const cC = <>
        <p className={"text-white text-center"}>
            I was responsible for developing a part of the crash sequence, which included creating the car crash animations,
            implementing rag-doll physics for the grandmother and children, and designing the windshield cracking
            effect triggered upon impact with a body.
        </p>
    </>;
    const cC2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-75"} src={collection.GetContentEntry("Crashing")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 5, Crashing.</figcaption>
        </figure>
    </>;

    //Video
    const video = <>
        <video key={collection.GetContentEntry("Video")} className={"w-100"} controls>
            <source src={collection.GetContentEntry("Video")} type="video/mp4"/>
            Your browser doesn't support the video tag.
        </video>
    </>

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <TitleSection title={title} platform={platform} description={description}></TitleSection>
                {/*Terrain Generator*/}
                <ContentSection title={"Terrain Generation"} content1={cTG}></ContentSection>
                <ContentSection content1={cLeftTG} content2={cRightTG}></ContentSection>
                {/*Texts*/}
                <ContentSection title={"Texting"} content1={cT}></ContentSection>
                <ContentSection content1={cLeftT} content2={cRightT}></ContentSection>
                {/*Crashing*/}
                <ContentSection title={"Crashing"} content1={cC}></ContentSection>
                <ContentSection content1={cC2}></ContentSection>
                {/*Video*/}
                <ContentSection title={"Playthrough"} content1={video}></ContentSection>
            </div>
        </>
    );
}

export default ALittleToLate;