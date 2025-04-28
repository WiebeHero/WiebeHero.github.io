import Back from "./Back.tsx";
import AssetManager from "../../../../assets/AssetManager.ts";
import AssetEntry from "../../../../assets/AssetEntry.ts";
import {JSX} from "react";
import ContentSection from "./components/ContentSection.tsx";
import TitleSection from "./components/TitleSection.tsx";

interface FreezerProjectProps{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function FreezerProject({changePage}: FreezerProjectProps) {

    const freezerCollection: AssetEntry = AssetManager.FreezerCollection;
    const figureStyle: string = "text-white fst-italic";

    //Title etc.
    const title = "VR Training Simulation – CO₂ Refrigeration System";
    const platform = "Unity | C#";
    const description = <>A virtual reality training game designed to simulate equipment
        maintenance within a retail environment. The objective is to diagnose and
        repair issues in a CO₂ refrigeration installation within a set time limit. This
        project was developed as a refresher tool for professionals in refrigeration technology,
        helping them revisit potential malfunctions and scenarios they may encounter in real systems.
        It serves as preparation before attempting the written exam required to renew their certification."</>;

    //TP Anchor Content.
    const cLeftTPA = <>
        <p className={"text-white"}>
            Accessibility is key in VR game development. I proposed adding teleportation anchors to
            address potential motion sickness caused by joystick-only movement, which the project lead
            initially
            preferred.
            I suggested offering both options to improve player comfort. the project lead agreed, and
            I
            implemented the feature.
        </p>
        <p className={"text-white"}>
            The Unity XR Toolkit includes built-in teleportation functionality, which streamlined
            development.
            However, it lacked clear visual indicators for teleportation anchors. To address this, I
            began by
            designing a custom indicator—a line with a circle at the top—to signal the presence of an
            anchor.
            Rather than manually creating it in the Unity Editor, which was time-consuming, I wrote a
            script
            that dynamically generates and saves this visual within the Line Visual script. The result
            of this
            is visible in Figure 1.
        </p>
        <p className={"text-white"}>
            Next, I implemented a particle field around the teleportation anchor to enhance visibility
            when the
            anchor becomes active. To further improve user feedback, I added a visual state change:
            when
            the teleportation
            ray hovers over an anchor, the indicator line and particles change color, and particle
            intensity increases to
            signify interactivity. As shown in Figure 2.
        </p>
        <p className={"text-white"}>
            Understanding and manipulating the Line Renderer to achieve this effect was initially
            challenging,
            but after some experimentation, I successfully produced the desired result. Shown in
            Figure 3.
        </p>
    </>;
    const cRightTPA = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-50"} src={freezerCollection.GetContentEntry("TeleportationAnchor")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 1, Teleportation Anchor Visual.</figcaption>
        </figure>
    </>;
    const cLeftTPA2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"}
                 src={freezerCollection.GetContentEntry("TeleportationAnchorParticles")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 2, Anchor Particles</figcaption>
        </figure>
    </>;
    const cRightTPA2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"}
                 src={freezerCollection.GetContentEntry("TeleportationAnchorHover")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 3, Anchor Hover.</figcaption>
        </figure>
    </>;

    //Tooltips
    const cLeftTT = <>
        <p className={"text-white"}>
            After discussing the issue with the company coach, we identified the need for an in-game
            instructional system.
            This led to the development of the Tooltip feature, a guided, interactive world space
            overlay that
            highlights specific controller
            inputs and supports the player through the tutorial process.
        </p>
        <p className={"text-white"}>
            A core requirement was a visual line that accurately points to the correct button on the
            VR controller.
            Leveraging prior experience with line visuals from the teleportation anchor system, I
            began implementing this element.
            However, early tests revealed a problem: the line’s endpoint failed to rotate properly
            with the controller.
        </p>
        <p className={"text-white"}>
            The issue stemmed from incorrect coordinate space conversion for the endpoint. After
            resolving this with a minor adjustment,
            the line behaved correctly, dynamically following the controller’s orientation.
        </p>
        <p className={"text-white"}>
            Once the pointer was functioning, I integrated the corresponding tooltip text and
            ensured
            the highlighted button
            could glow when referenced. Fortunately, the controller models, carried over from a
            previous project,
            already supported button highlighting, which streamlined this step.
        </p>
        <p className={"text-white"}>
            The final tooltip system provides a clear, interactive method to introduce VR controls,
            improving user
            onboarding and reducing confusion for new players.
        </p>
    </>;
    const cRightTT = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-60"} src={freezerCollection.GetContentEntry("TooltipDevelopment")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 4, Tooltip Development.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={freezerCollection.GetContentEntry("TooltipGlowingButton")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 5, Tooltip Development.</figcaption>
        </figure>
    </>;

    //Follow target
    const cLeftFT = <>
        <p className={"text-white"}>
            During research into the game The Room VR: A Dark Matter, we observed an inventory
            system
            that floats in front
            of the player and dynamically follows their gaze. This inspired the idea of applying a
            similar approach to our project,
            replacing parts of the tooltip system with a more modular, component-based architecture.
        </p>
        <p className={"text-white"}>
            With that concept in mind, I began development on a flexible tracking system.
        </p>
        <p className={"text-white"}>
            This system includes a variety of adjustable parameters, such as whether the object
            should
            face the tracked target,
            which coordinate space it should operate in, positional offsets, and configurable
            constraints.
            These options provide essential flexibility, allowing the system to be adapted for
            various
            UI elements—such as
            an inventory screen or other interactive menus. Shown in Figure 6.
        </p>
        <p className={"text-white"}>
            As shown in Figure 7, these settings are actively used to position and control the
            inventory interface.
        </p>
    </>;
    const cRightFT = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-35"} src={freezerCollection.GetContentEntry("FollowTargetSettings")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 6, Follow target script.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={freezerCollection.GetContentEntry("InventoryRotation")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 7, Follow target in action.</figcaption>
        </figure>
    </>

    //Inventory
    const cLeftI = <>
        <p className={"text-white"}>
            While analyzing The Room VR: A Dark Matter, we observed a crucial design decision: key
            items required for
            progression are automatically stored in the inventory to prevent players from
            accidentally
            discarding them
            in unreachable areas. This approach ensures that essential objects are never lost—an
            especially useful feature
            for puzzle-based gameplay. Inspired by this, we implemented a similar system in our
            project.
        </p>
        <p className={"text-white"}>
            The first step was to determine how inventory items should be visually represented. In a
            previous project,
            I discovered a technique using RenderTextures to create an effective visual layout. As
            shown in Figure 8,
            the inventory UI appears directly in front of the player, composed of individual slots.
        </p>
        <p className={"text-white"}>
            Each inventory slot uses a RenderTexture linked to a dedicated camera. These cameras are
            statically positioned (Figure 9)
            and configured to render only objects on a specific inventory layer. The player’s main
            camera is excluded from rendering
            these layers, allowing for clean separation between the game world and the inventory
            display.
            When an item is placed into a slot—such as slot 1—the result is shown in Figures 10 and
            11.
        </p>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-50"} src={freezerCollection.GetContentEntry("InventorySkeleton")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 8, Inventory Skeleton.</figcaption>
        </figure>
    </>;
    const cRightI = <>
        <figure className={"w-80 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={freezerCollection.GetContentEntry("Cameras")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 9, Cameras.</figcaption>
        </figure>
        <figure className={"w-80 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={freezerCollection.GetContentEntry("CameraSees")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 10, Item in inventory camera display.
            </figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-60"} src={freezerCollection.GetContentEntry("ItemInInventory")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 11, Item in inventory display.</figcaption>
        </figure>
    </>;
    const cLeftI2 = <>
        <p className={"text-white"}>
            A display issue emerged where certain items appeared either too large or too small
            within
            their inventory slots, due to variations in their original 3D mesh sizes. To resolve
            this,
            I applied several techniques—including set object scaling, camera field-of-view
            adjustments,
            and fine-tuning post-processing effects such as anti-aliasing. These adjustments ensured
            that items were
            consistently and clearly presented, regardless of their original dimensions or modeling
            inconsistencies.
        </p>
        <p className={"text-white"}>
            There are 3 different components that we need to make the inventory fully functional, an
            inventory interactable,
            which makes you actually be able to grab the slot itself, inventory item which uses the
            XRGrabInteractable component.
            The actual item itself that needs to go into the inventory when picked up and lastly,
            the
            inventory slot that extends
            from XRBaseInteractable, which manages what inventory item it is holding and which slot
            is
            occupied.
            When these components are put to action, this is what that looks like in figure 20.
        </p>
        <p className={"text-white"}>
            There were a few minor problems encountered during the development of the inventory, the
            main problem,
            which I can refer back to in figure 12, was on how to centre certain objects to the
            centre
            of the camera,
            for the inventory slot. This was a bit hard to figure out, due to the fact that this was
            a
            problem that is
            created by the artist. The solution to this problem, was found inside of the Mesh
            Renderer. The mesh renderer
            component contained elements that could help such as checking the meshes proportions to
            that scale and
            centre it in front of the camera responsible for that inventory slot.
        </p>
    </>;
    const cRightI2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={freezerCollection.GetContentEntry("InventoryItems")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 12, Tooltip Development.</figcaption>
        </figure>
    </>;

    //Sequence
    const cLeftS = <>
        <p className={"text-white"}>
            One of the most critical aspects of the game is the tutorial system. It serves a dual
            purpose: introducing players
            to the game mechanics while simultaneously familiarizing them with the fundamentals of
            virtual reality.
        </p>
        <p className={"text-white"}>
            Unlike previous components, which were largely mathematical or logic-driven and required
            minimal structure,
            the tutorial demanded a more flexible and scalable design. It quickly became clear that
            each tutorial step needed
            to be configurable through the Unity Editor, as the number and type of objects affected
            could vary significantly between steps.
        </p>
        <p className={"text-white"}>
            To support this, I had to design a system that allowed each step to be triggered by a
            player-driven condition.
            This required either the development of new tooling or the use of an existing library
            capable of supporting such behavior.
            I integrated the Serializable Callbacks library, which allows for the invocation of
            events
            and customizable return values
            directly within the editor. This enabled me to define various condition types, each
            capable of triggering the progression
            to the next tutorial step. A class diagram outlining the structure of this system is
            shown
            in Figure 21.
        </p>
        <p className={"text-white"}>
            Originally named "Tutorial," the system evolved into something more robust and reusable
            over
            the course of development. It was ultimately renamed Sequence, reflecting its broader
            purpose:
            managing any ordered series of steps—not just tutorial content. This did not require a
            full
            refactor but marked a key conceptual shift.
        </p>
        <p className={"text-white"}>
            Although the Sequence system was initially designed for tutorial use, as demonstrated in
            Figures 22 and 23, the primary challenge was implementing condition logic in a way that
            could
            interact with various systems. This included third-party systems such as Unity’s XR
            Toolkit.
            Conditions needed to account for diverse scenarios: whether an action should occur once
            or
            multiple times, and whether progress toward a goal should be visualized for the player.
        </p>
        <p className={"text-white"}>
            The solution involved building a modular condition-checking framework capable of
            handling
            these different cases. It was a complex challenge, but I was able to design and
            implement
            a
            system that provided a clean, editor-driven approach—something I’m especially proud of,
            as
            reflected in the class structure shown in Figure 21.
        </p>
    </>;
    const cRightS = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95 bg-white"} src={freezerCollection.GetContentEntry("ClassDiagram")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 14, Tutorial Part 1.</figcaption>
        </figure>
    </>;
    const cLeftS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100 bg-white"}
                 src={freezerCollection.GetContentEntry("TutorialPart1")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 13, Class Diagram Sequence.</figcaption>
        </figure>
    </>;
    const cRightS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100 bg-white"}
                 src={freezerCollection.GetContentEntry("TutorialPart2")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 15, Tutorial Part 2.</figcaption>
        </figure>
    </>;

    //Video
    const video = <>
        <video key={freezerCollection.GetContentEntry("Video")} className={"w-100"} controls>
            <source src={freezerCollection.GetContentEntry("Video")} type="video/mp4"/>
            Your browser doesn't support the video tag.
        </video>
    </>

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <TitleSection title={title} platform={platform} description={description}></TitleSection>
                {/*Teleportation Anchors.*/}
                <ContentSection title={"Teleportation Anchors"} content1={cLeftTPA} content2={cRightTPA}></ContentSection>
                <ContentSection content1={cLeftTPA2} content2={cRightTPA2}></ContentSection>
                {/*Tooltips*/}
                <ContentSection title={"Tooltips"} content1={cLeftTT} content2={cRightTT}></ContentSection>
                {/*Follow Target*/}
                <ContentSection title={"Follow Target"} content1={cLeftFT} content2={cRightFT}></ContentSection>
                {/*Inventory Part 1*/}
                <ContentSection title={"Inventory"} content1={cLeftI} content2={cRightI}></ContentSection>
                <ContentSection content1={cLeftI2} content2={cRightI2}></ContentSection>
                {/*Sequence*/}
                <ContentSection title={"Sequence System"} content1={cLeftS} content2={cRightS}></ContentSection>
                <ContentSection content1={cLeftS2} content2={cRightS2}></ContentSection>
                {/*Play through*/}
                <ContentSection title={"Playthrough"} content1={video}></ContentSection>
            </div>
        </>
    );
}

export default FreezerProject;