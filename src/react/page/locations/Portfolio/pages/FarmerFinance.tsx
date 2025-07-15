import Back from "./Back.tsx";
import {JSX} from "react";
import TitleSection from "./components/TitleSection.tsx";
import AssetManager from "../../../../assets/AssetManager.ts";
import AssetEntry from "../../../../assets/AssetEntry.ts";
import ContentSection from "./components/ContentSection.tsx";

interface Props{
    changePage: (page: JSX.Element, pageNumber: number) => void;
}

function FarmerFinance({changePage}: Props) {

    const farmerFinanceCollection: AssetEntry = AssetManager.FarmerFinanceCollection;
    const figureStyle: string = "text-white fst-italic";

    const title = "Farmer Finance App – Educational Farm Assembler";
    const tools = "Unity | C#";
    const platform = "Windows | WebGL";
    const description = <>{farmerFinanceCollection.GetContentEntry("Description")}
        <p className={"mt-2 mb-0"}>I have made a thesis for this project regarding software/game architecture.</p>
        <a href={farmerFinanceCollection.GetContentEntry("Thesis")} target={"_blank"}>You can view it here</a></>;

    //Video
    const video = <>
        <video key={farmerFinanceCollection.GetContentEntry("Video")} className={"w-100"} controls>
            <source src={farmerFinanceCollection.GetContentEntry("Video")} type="video/mp4"/>
            Your browser doesn't support the video tag.
        </video>
    </>

    //Sequence System
    const cLeftS = <>
        <p className={"text-white"}>
            The sequence system streamlines building step-based workflows using Unity’s built-in tools,
            minimizing the need for custom programming. For example, the modal system uses sequences to
            open and close modals with animations, and the energy configurator uses sequences to update
            the UI when device quantities change.
        </p>
        <p className={"text-white"}>
            The sequence system provides four key events to control behavior: IfDisabled executes when a
            sequence is disabled, useful for debugging or preventing interference. OnBoot triggers one frame
            after startup for additional setup. OnAnyStepEntered fires when entering a step, enabling custom
            actions, and OnAnyStepExited fires when exiting a step. (Figure 1)
        </p>
        <p className={"text-white"}>
            Each step contains descriptive information so developers can quickly understand its purpose.
            Steps progress based on conditions, with each step supporting multiple conditions.
            Available condition types include: SequenceCondition, which waits for an external trigger; SequenceAwaitConditionBool,
            which waits for a boolean to become true; and SequenceAwaitConditionInt, which waits for an integer to meet a specified value.(Figure 2)
        </p>
        <p className={"text-white"}>
            Conditions can have additional rules to modify behavior, such as Multiple Completions,
            requiring a condition to be met multiple times, and Reversion, allowing a sequence to step backward if
            conditions dictate. For example, a condition might wait for a callback to return 1 before allowing the sequence to continue. (Figure 3)
        </p>
    </>;
    const cRightS = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-90"} src={farmerFinanceCollection.GetContentEntry("SSV")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 1, Sequence System View in editor.</figcaption>
        </figure>
    </>;
    const cLeftS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={farmerFinanceCollection.GetContentEntry("SAIC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 2, Sequence Await Int Condition.</figcaption>
        </figure>
    </>;
    const cRightS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={farmerFinanceCollection.GetContentEntry("SCR")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 3, Condition Rules.</figcaption>
        </figure>
    </>;
    const cLeftS3 = <>
        <p className={"text-white"}>
            I have iterated on the sequence condition system and significantly improved the await condition.
            This condition can now track all primitive value types, including int, float, double, bool, and string, as shown in Figure 4.
            It works through the Usable system, which is described further in this post, and allows comparison between a callback value
            and a value set in the editor for the condition to complete.
        </p>
    </>;
    const cRightS3 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"} src={farmerFinanceCollection.GetContentEntry("SVC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 4, Sequence Await Value Condition.</figcaption>
        </figure>
    </>;
    const cLeftS4 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={farmerFinanceCollection.GetContentEntry("CSCC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 5, Code Snippet Condition Check.</figcaption>
        </figure>
    </>;
    const cRightS4 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={farmerFinanceCollection.GetContentEntry("CSCA")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 6, Code Snippet Condition Instantiate.</figcaption>
        </figure>
    </>;

    //Worker System
    const cLeftWM = <>
        <p className={"text-white"}>
            The worker system allows you to search for objects of a specific type and execute an operation on all matching objects,
            as shown in Figure 7. At startup, the worker searches for objects specified by a SerializableType, optionally applying
            conditions. Each worker has a name, and can be triggered from the editor by that name. When executed, the worker iterates
            over the objects it found and invokes the assigned method, such as InvokeTransmission().
        </p>
        <p className={"text-white"}>
            Object searching is flexible: the worker can search globally across the scene, search within the children of a target,
            or filter by conditions like object name. For example, you can search for all objects named UpdateSlider.
        </p>
        <p className={"text-white"}>
            Execution offers additional settings. The change self-target option ensures the method runs on each found object individually.
            The change self-parameter option allows methods with parameters to automatically receive each found object as an argument.
            The worker can also search for the required component on a child object if it’s not present on the object itself.
        </p>
        <p className={"text-white"}>
            Workers can define conditions that must be met before executing, working in the same way as conditions in the sequence system.
        </p>
    </>;
    const cRightWM = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={farmerFinanceCollection.GetContentEntry("WM")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 7, Worker Manager view in editor.</figcaption>
        </figure>
    </>;
    const cLeftWM2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-85"} src={farmerFinanceCollection.GetContentEntry("CSSEC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 8, Code Snippet Change Event Call.</figcaption>
        </figure>
    </>;
    const cRightWM2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-95"} src={farmerFinanceCollection.GetContentEntry("CSSC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 9, Code Snippet Change Callback Call</figcaption>
        </figure>
    </>;
    const cLeftWM3 = <>
        <p className={"text-white"}>
            The worker system is intuitive and convenient to use, but technical testing revealed performance issues.
            To address this, I redesigned its approach. Previously, a worker would iterate through all conditions and
            events to set up and invoke operations at runtime, which was time-consuming. The new design delegates this
            setup to dedicated WorkerPassed objects, where setup is pre-configured and only invocation remains.
            This optimization improved performance by roughly 70 times, enabling the worker system to be used more
            frequently and for more demanding operations.
        </p>
    </>;
    const cRightWM3 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={farmerFinanceCollection.GetContentEntry("OPWS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 10, Worker System.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-100"} src={farmerFinanceCollection.GetContentEntry("NPWS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 11, Worker System Refactored.</figcaption>
        </figure>
    </>;

    //Transmission System
    const cLeftTS = <>
        <p className={"text-white"}>
            As seen in Figure 12, the transmission manager has three main responsibilities: defining groups,
            defining commands, and managing connections between instantiated prefabs and the scene. At startup,
            it records all connectors and invokers present in the scene. When a new connector or invoker is instantiated,
            the manager attempts to automatically connect it to its counterpart based on matching group and command identifiers.
        </p>
        <p className={"text-white"}>
            The transmission invoker is responsible for signaling where an invocation originates. For example,
            a prefab for a windmill modal might contain plus and minus buttons to adjust quantity. While the prefab itself
            can’t directly interact with the scene, the transmission invoker enables this communication (Figure 13). When activated,
            typically by a button click, the invoker triggers an event defined by its properties, notifying the appropriate transmission connector.
        </p>
        <p className={"text-white"}>
            There are also specialized invokers, such as the generic transmission invoker shown in Figure 14,
            which supports additional invocation types with parameters, like floats.
        </p>
        <p className={"text-white"}>
            The transmission connector listens for invocations from its assigned invoker and performs the
            corresponding action in the scene or prefab. The invoker signals that something has occurred; the connector
            handles executing the appropriate response, as illustrated in Figures 15 and 16.
        </p>
    </>;
    const cRightTS = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"} src={farmerFinanceCollection.GetContentEntry("TM")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 12, Transmission Manager editor view.</figcaption>
        </figure>
    </>;
    const cLeftTS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"} src={farmerFinanceCollection.GetContentEntry("TI")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 13, Transmission Invoker editor view.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-80"} src={farmerFinanceCollection.GetContentEntry("TI2")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 14, Transmission Invoker editor view.</figcaption>
        </figure>
    </>;
    const cRightTS2 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={farmerFinanceCollection.GetContentEntry("TC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 15, Transmission Invoker editor view.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={farmerFinanceCollection.GetContentEntry("TC2")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 16, Transmission Invoker editor view.</figcaption>
        </figure>
    </>;
    const cLeftTS3 = <>
        <p className={"text-white"}>
            While the transmission system was convenient to use, it had a key flaw: it relied on raw
            strings in arrays to define groups and commands. This made it prone to spelling errors, hard to
            maintain, and required manually updating the transmission manager to add new entries, which became a bottleneck.
        </p>
        <p className={"text-white"}>
            To address this, I improved the system by introducing IDs for both transmission connectors and invokers.
            An ID can be generated for a connector or invoker and then automatically displayed on its counterpart, allowing easy
            linking without relying on string inputs. This greatly streamlined setup, reduced errors, and made the system more
            user-friendly by enabling quick connections through simple clicks. (Figure 17 and 18)
        </p>
    </>;
    const cRightTS3 = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={farmerFinanceCollection.GetContentEntry("NTC")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 17, New Transmission Connector.</figcaption>
        </figure>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-70"} src={farmerFinanceCollection.GetContentEntry("NTI")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 18, New Transmission Invoker</figcaption>
        </figure>
    </>;
    //Calculate System
    const cLeftCS = <>
        <p className={"text-white"}>
            The calculate system maintains a list of entries called CalculateData. Each entry has an identifier,
            a value type (int, float, or double), and specifies how the calculation should be performed. The selected
            type ensures correct handling and triggers an event with the resulting value.
        </p>
        <p className={"text-white"}>
            The system processes a sequence of steps, where each step defines what the value represents (calculate
            step),
            the operation to apply (such as addition, subtraction, division, or multiplication), and whether to use a
            callback or a
            manually entered number.
        </p>
        <p className={"text-white"}>
            A full example of these steps and calculations can be seen in Figure 19.
        </p>
    </>;
    const cRightCS = <>
        <figure className={"w-100 d-flex flex-column align-items-center"}>
            <img className={"w-60"} src={farmerFinanceCollection.GetContentEntry("CS")}
                 alt={"Missing"}></img>
            <figcaption className={figureStyle}>Figure 19, The Calculate System.</figcaption>
        </figure>
    </>;

    return (
        <>
            <Back changePage={changePage}></Back>
            <div className="w-100 d-flex flex-column align-items-center">
                <TitleSection title={title} tools={tools} platform={platform} description={description}></TitleSection>
                <ContentSection title={"Playthrough"} content1={video}></ContentSection>
                {/*Sequence System*/}
                <ContentSection title={"Sequence System"} content1={cLeftS} content2={cRightS}></ContentSection>
                <ContentSection content1={cLeftS2} content2={cRightS2}></ContentSection>
                <ContentSection title={"Sequence Iteration"} content1={cLeftS3} content2={cRightS3}></ContentSection>
                <ContentSection content1={cLeftS4} content2={cRightS4}></ContentSection>
                {/*Worker System*/}
                <ContentSection title={"Worker Manager"} content1={cLeftWM} content2={cRightWM}></ContentSection>
                <ContentSection content1={cLeftWM2} content2={cRightWM2}></ContentSection>
                <ContentSection title={"Worker Manager Performance"} content1={cLeftWM3} content2={cRightWM3}></ContentSection>
                <ContentSection title={"Transmission System"} content1={cLeftTS} content2={cRightTS}></ContentSection>
                <ContentSection content1={cLeftTS2} content2={cRightTS2}></ContentSection>
                <ContentSection title={"Transmission System Iteration"} content1={cLeftTS3} content2={cRightTS3}></ContentSection>
                <ContentSection title={"Calculate System"} content1={cLeftCS} content2={cRightCS}></ContentSection>
            </div>
        </>
    );
}

export default FarmerFinance;