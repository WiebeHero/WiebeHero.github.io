import Back from "./Back.tsx";
import {JSX} from "react";
import TitleSection from "./components/TitleSection.tsx";
import AssetManager from "../../../../assets/AssetManager.ts";
import AssetEntry from "../../../../assets/AssetEntry.ts";
import ContentSection from "./components/ContentSection.tsx";

interface SweetDreamsProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function SweetDreams({changePage}: SweetDreamsProps) {

    const sweetDreamsCollection: AssetEntry = AssetManager.SweetDreamsCollection;
    const figureStyle: string = "text-white fst-italic";

    const title = "Sweet Dreams – Multiplayer Party Brawler";
    const platform = "Unity | C#";
    const description = <>Sweet Dreams is a lighthearted multiplayer party game where child-drawn monsters come to life
        and engage in whimsical pillow fights. Designed for 2 to 4 players using controllers, the objective is to
        outlast
        the competition and be the last one standing. The game blends playful art with competitive gameplay, creating a
        fun
        and imaginative experience for players of all ages.</>;

    //Character Select
    const cLeftCS = <>
        <p className={"text-white"}>
            The character selection screen in our game was designed with controller-based input in mind, allowing 2 to 4
            players
            to join and participate simultaneously. This diverges from the typical controller-driven approach and
            required a few
            unique considerations.
        </p>
        <p className={"text-white"}>
            The first challenge was detecting connected controllers. Upon loading the main menu, the system
            automatically registers
            the number of controllers currently connected and continues to monitor for new connections or disconnections
            in real
            time (Figure 1 and 2). This was efficiently implemented using Unity’s PlayerInputManager, by subscribing to
            its connect and disconnect
            events to dynamically add or remove players from the selection screen.
        </p>
        <p className={"text-white"}>
            For character selection, a custom scrolling interface was developed. Players can navigate left or right
            through available
            characters using their controller input. Based on a recommendation from one of our artists, the characters
            were arranged
            horizontally in the background, and a dedicated camera was used to render them to a RenderTexture displayed
            on the selection
            screen. To enhance the user experience, tweening was applied to ensure smooth scrolling animations. (Figure
            1 and 2)
        </p>
        <p className={"text-white"}>
            Finally, character selection and readiness were handled through an event-driven system. When a player
            selects a character,
            the scroller component triggers a "player ready" event via an event bus. This action removes certain UI
            elements and initiates
            a character "ready" animation (Figure 3). Once all players have confirmed their selections, the game
            transitions to a tutorial screen
            where players can review instructions. After everyone has read and acknowledged the tutorial, the game
            begins. (Figure 4)
        </p>
    </>;
    const cRightCS = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={sweetDreamsCollection.GetContentEntry("SDCP")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 1, Character Selection while controller connected.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={sweetDreamsCollection.GetContentEntry("SDNP")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 2, Character Selection new controller connected.</figcaption>
        </figure>
    </>;
    const cLeftCS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={sweetDreamsCollection.GetContentEntry("SDRU")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 3, Ready up in character select.</figcaption>
        </figure>
    </>;
    const cRightCS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={sweetDreamsCollection.GetContentEntry("SDTS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 4, Ready up in tutorial screen.</figcaption>
        </figure>
    </>;
    const cLeftCS3 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"} src={sweetDreamsCollection.GetContentEntry("CSCS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 5, Character Select snippet.</figcaption>
        </figure>
    </>;
    const cRightCS3 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={sweetDreamsCollection.GetContentEntry("CSS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 6, Scroller snippet.</figcaption>
        </figure>
    </>;

    //Camera Movement
    const cCM = <>
        <p className={"text-white"}>
            Designing the camera movement system proved to be a challenging task, particularly due to the need to
            accommodate
            2 to 4 players on screen simultaneously. The goal was to ensure that all players remained visible within the
            frame at all times.
        </p>
        <p className={"text-white"}>
            The solution involved first retrieving the coordinates of all active players and calculating the distances
            between each of them.
            From these values, the greatest distance was identified and used as a basis for determining the camera’s
            focal point.
            The camera was then positioned to follow the midpoint of the players while dynamically adjusting the field
            of view (FOV) according
            to the maximum distance between them. (Figure 7)
        </p>
        <p className={"text-white"}>
            While the implementation was not flawless, it effectively met our requirements and was ultimately used in
            the final version of the game.
        </p>
    </>
    const cLeftCM = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={sweetDreamsCollection.GetContentEntry("CM")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 7, Camera Movement.</figcaption>
        </figure>
    </>
    const cRightCM = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-75"} src={sweetDreamsCollection.GetContentEntry("CSCM")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 8, Camera Movement snippet.</figcaption>
        </figure>
    </>

    //Damage and health.
    const cLeftD = <>
        <p className={"text-white"}>
            A central gameplay mechanic in this brawler involves players striking each other with pillows.
            To enhance the impact and feel of these interactions, we implemented a velocity-based system.
            In order to deal damage, the pillow must reach a minimum velocity threshold. Once this threshold is exceeded,
            the velocity is also applied to the target, resulting in a satisfying knock back effect.
        </p>
        <p className={"text-white"}>
            This mechanic is supported by a health system in which each player begins with four health points.
            When hit by a qualifying pillow strike, a player loses one health point. In addition, a visual particle
            effect is triggered upon impact, the player is pushed back, and their character portrait updates to reflect
            increasing levels of fatigue.
        </p>
    </>;
    const cRightD = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={sweetDreamsCollection.GetContentEntry("Damage")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 9, Pillow Slap Velocity.</figcaption>
        </figure>
    </>;
    const cLeftD2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={sweetDreamsCollection.GetContentEntry("Portrait")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 10, Portrait Change.</figcaption>
        </figure>
    </>
    const cRightD2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-50"} src={sweetDreamsCollection.GetContentEntry("CSP")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 11, Pillow Code snippet.</figcaption>
        </figure>
    </>

    //Video
    const video = <>
        <p className={"text-white text-center"}>
            This playthrough was recorded during our showcase at Concordia University, where we presented the project to visiting attendees.
        </p>
        <video key={sweetDreamsCollection.GetContentEntry("Video")} className={"w-100"} controls>
            <source src={sweetDreamsCollection.GetContentEntry("Video")} type="video/mp4"/>
            Your browser doesn't support the video tag.
        </video>
    </>

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <TitleSection title={title} platform={platform} description={description}></TitleSection>
                {/*Character Select*/}
                <ContentSection title={"Character Selection"} content1={cLeftCS} content2={cRightCS}></ContentSection>
                <ContentSection content1={cLeftCS2} content2={cRightCS2}></ContentSection>
                <ContentSection content1={cLeftCS3} content2={cRightCS3}></ContentSection>
                {/*Camera Movement*/}
                <ContentSection title={"Camera Movement"} content1={cCM}></ContentSection>
                <ContentSection content1={cLeftCM} content2={cRightCM}></ContentSection>
                {/*Damage*/}
                <ContentSection title={"Pillow Strikes"} content1={cLeftD} content2={cRightD}></ContentSection>
                <ContentSection content1={cLeftD2} content2={cRightD2}></ContentSection>
                {/*Video*/}
                <ContentSection title={"Playthrough"} content1={video}></ContentSection>
            </div>
        </>
    );
}

export default SweetDreams;