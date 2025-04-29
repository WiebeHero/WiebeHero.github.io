import Back from "./Back.tsx";
import TitleSection from "./components/TitleSection.tsx";
import ContentSection from "./components/ContentSection.tsx";
import AssetEntry from "../../../../assets/AssetEntry.ts";
import AssetManager from "../../../../assets/AssetManager.ts";
import FreezerProject from "./FreezerProject.tsx";

interface TractorProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function TractorProject({changePage}: TractorProps) {

    const tractorCollection: AssetEntry = AssetManager.TractorCollection;
    const figureStyle: string = "text-white fst-italic";

    //Title etc.
    const title = "The Tractor Project – Educational Assembly Simulation";
    const platform = "Unity | C#";
    const description = <>The Tractor Project is an educational game designed to teach players how to assemble a
        tractor by identifying and correctly placing its various components within a time limit. The game is primarily aimed
        at prospective students attending open days, offering an engaging and interactive introduction to mechanical assembly
        and agricultural engineering concepts.</>;

    //Text Filler Chef
    const cFC = <>
        <p className={"text-white"}>
            The tractor chef assists players by introducing the basic controls of the game and offering contextual tips to
            help them progress (Figure 1). In addition, a special feature has been implemented in the controllers, causing specific
            parts to illuminate based on the current task or step.
        </p>
        <p className={"text-white"}>
            When a player requests a hint, on-screen text will indicate which component should be mounted onto the tractor chassis.
            The corresponding part within the garage will also be highlighted. However, each hint request deducts 25 points from
            the player's score and reduces the remaining time available in the game (Figure 2).
        </p>
        <p className={"text-white"}>
            The Tractor Chef system has served as a catalyst for the development of a new framework, known as the Sequence System.
            To learn more about this evolution, please refer to the project titled
             <a onClick={() => {changePage(<FreezerProject changePage={changePage}></FreezerProject>, 2)}} className={"cursor-pointer"}> "VR Training Simulation – CO₂ Refrigeration System."</a>
        </p>
    </>;
    const cLeftFC = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-90"}
                 src={tractorCollection.GetContentEntry("TractorChefExplains")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 1, Tractor Chef explains.</figcaption>
        </figure>
    </>;
    const cRightFC = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-90"}
                 src={tractorCollection.GetContentEntry("TractorChefTip")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 2, Tractor Chef lights up.</figcaption>
        </figure>
    </>;
    const cLeftFC2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"}
                 src={tractorCollection.GetContentEntry("CSTCT1")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 3, Text Filler Chef snippet 1.</figcaption>
        </figure>
    </>;
    const cRightFC2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"}
                 src={tractorCollection.GetContentEntry("CSTCT2")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 4, Text Filler Chef snippet 2.</figcaption>
        </figure>
    </>;

    //Tractor Assembly
    const cLeftTA = <>
        <p className={"text-white"}>
            The tractor assembly (Figure 5) process is managed through two core scripts: the Tractor script and the Collision Notifier.
            The Tractor script tracks and manages the current assembly step within the game, while the Collision Notifier communicates
            with the Tractor script to initiate attachment of parts to the chassis.
        </p>
        <p className={"text-white"}>
            One of the primary challenges in implementing this system was handling rotational alignment.
            The Collision Notifier only sends a message to the Tractor script if the rotation of the part
            closely matches that of the corresponding component on the semi-transparent chassis model.
        </p>
        <p className={"text-white"}>
            Additional minor issues also arose during development, such as animations continuing after a part was attached,
            or inconsistencies in part order recognition during assembly.
        </p>
    </>;
    const cRightTA = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-50"}
                 src={tractorCollection.GetContentEntry("TractorAssembly")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 5, Tractor Assembly.</figcaption>
        </figure>
    </>;
    const cLeftTA2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"}
                 src={tractorCollection.GetContentEntry("CST")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 6, Tractor Assembly snippet.</figcaption>
        </figure>
    </>;
    const cRightTA2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"}
                 src={tractorCollection.GetContentEntry("CSCN")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 7, Collision Notifier snippet.</figcaption>
        </figure>
    </>;

    //Video
    const video = <>
        <video key={tractorCollection.GetContentEntry("Video")} className={"w-100"} controls>
            <source src={tractorCollection.GetContentEntry("Video")} type="video/mp4"/>
            Your browser doesn't support the video tag.
        </video>
    </>

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                {/*Title*/}
                <TitleSection title={title} platform={platform} description={description}></TitleSection>
                {/*Tractor Chef*/}
                <ContentSection title={"Tractor Chef"} content1={cFC} ></ContentSection>
                <ContentSection content1={cLeftFC} content2={cRightFC}></ContentSection>
                <ContentSection content1={cLeftFC2} content2={cRightFC2}></ContentSection>
                {/*Tractor Assembly*/}
                <ContentSection title={"Tractor Assembly"} content1={cLeftTA} content2={cRightTA}></ContentSection>
                <ContentSection content1={cLeftTA2} content2={cRightTA2}></ContentSection>
                {/*Playthrough*/}
                <ContentSection title={"Playthrough"} content1={video}></ContentSection>
            </div>
      </>
    );
}

export default TractorProject;