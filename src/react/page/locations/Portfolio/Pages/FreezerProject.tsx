import Back from "./Back.tsx";
import AssetManager from "../../../../assets/AssetManager.ts";
import AssetEntry from "../../../../assets/AssetEntry.ts";

interface FreezerProjectProps{
    changePage: (page: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined, pageNumber: number) => void;
}

function FreezerProject({changePage}: FreezerProjectProps) {

    const freezerCollection: AssetEntry = AssetManager.FreezerCollection;

    return (
      <>
        <Back changePage={changePage}></Back>
        <div className="w-100 d-flex flex-column align-items-center">
            <div className="d-flex w-75 min-w-350p text-center flex-column align-items-center">
                <p className={"h1 text-white mt-5 pt-5"}>VR Training Simulation – CO₂ Refrigeration System</p>
                <p className={"text-white fs-4"}>Unity | C#</p>
                <p className={"w-60 text-white"}>A virtual reality training game designed to simulate equipment maintenance within a retail environment.
                    The objective is to diagnose and repair issues in a CO₂ refrigeration installation within a set time limit.
                    This project was developed as a refresher tool for professionals in refrigeration technology, helping them
                    revisit potential malfunctions and scenarios they may encounter in real systems. It serves as preparation
                    before attempting the written exam required to renew their certification.</p>
            </div>
            <div className="container w-75 min-w-350p d-flex align-items-center flex-column">
                <p className={"h2 text-white mt-5 mb-3 text-center"}>Teleportation Anchors</p>
                <div className={"container d-flex flex-row flex-wrap align-content-center"}>
                    <div className={"d-flex flex-column col-xl-6 col-sm-12 col-12"}>
                        <p className={"text-white"}>
                            Accessibility is key in VR game development. I proposed adding teleportation anchors to
                            address potential motion sickness caused by joystick-only movement, which Wander initially
                            preferred.
                            I suggested offering both options to improve player comfort. Wander agreed, and I
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
                            that dynamically generates and saves this visual within the Line Visual script.
                        </p>
                        <p className={"text-white"}>
                            Next, I implemented a particle field around the teleportation anchor to enhance visibility
                            when the
                            anchor becomes active. To further improve user feedback, I added a visual state change: when
                            the teleportation
                            ray hovers over an anchor, the indicator line and particles change color, and particle
                            intensity increases to
                            signify interactivity.
                        </p>
                        <p className={"text-white"}>
                            Understanding and manipulating the Line Renderer to achieve this effect was initially
                            challenging,
                            but after some experimentation, I successfully produced the desired result.
                        </p>
                    </div>
                    <div className={"d-flex flex-column col-xl-6 col-sm-12 col-12 align-items-center"}>
                        <img className={"w-50"} src={freezerCollection.GetContentEntry("TeleportationAnchor")}
                             alt={"Missing"}></img>
                    </div>
                </div>
            </div>
        </div>
      </>
    );
}

export default FreezerProject;