import AssetEntry from "./AssetEntry.ts";
import farmerImage from "/projects/farmer_finance/FarmerFinance.png";
import farmerThumbnail from "/projects/farmer_finance/Thumbnail.png";
import farmerVideo from "/projects/farmer_finance/FarmerFinance.mp4";
import thesis from "/projects/farmer_finance/GraduationReport.pdf";
//Sequence
import sequenceView from "/projects/farmer_finance/sequences/SequenceSystemView.png";
import sequenceIntCondition from "/projects/farmer_finance/sequences/SequenceAwaitIntCondition.png";
import sequenceConditionRules from "/projects/farmer_finance/sequences/SequenceConditionRules.png";
import sequenceValueCondition from "/projects/farmer_finance/sequences/SequenceValueCondition.png";
import csConditionCheck from "/projects/farmer_finance/sequences/CodeSnippetConditionCheck.png";
import csConditionActivation from "/projects/farmer_finance/sequences/CodeSnippetConditionActivation.png";
//Worker Manager
import workerManager from "/projects/farmer_finance/worker_manager/WorkerManager.png";
import csSerializeEventCall from "/projects/farmer_finance/worker_manager/CodeSnippetSerializeEventCall.png";
import csSerializeCallback from "/projects/farmer_finance/worker_manager/CodeSnippetSerializeCallback.png";
import workerSystemOldPerformance from "/projects/farmer_finance/worker_manager/OldPerformanceWorkerSystem.png";
import workerSystemNewPerformance from "/projects/farmer_finance/worker_manager/NewPerformanceWorkerSystem.png";
//Transmission System
import transmissionManager from "/projects/farmer_finance/transmission_system/TransmissionManager.png";
import transmissionInvoker from "/projects/farmer_finance/transmission_system/TransmissionInvoker.png";
import transmissionInvoker2 from "/projects/farmer_finance/transmission_system/TransmissionInvoker2.png";
import transmissionConnector from "/projects/farmer_finance/transmission_system/TransmissionConnector.png";
import transmissionConnector2 from "/projects/farmer_finance/transmission_system/TransmissionConnector2.png";
import newTransmissionInvoker from "/projects/farmer_finance/transmission_system/NewTransmissionInvoker.png";
import newTransmissionConnector from "/projects/farmer_finance/transmission_system/NewTransmissionConnector.png";
//Calculate System
import calculateSystem from "/projects/farmer_finance/calculate_system/CalculateSystem.png";

function FarmerFinanceCollection() {
    let collection: AssetEntry = new AssetEntry();

    collection.AddContentEntry("Title", "Farmer Finance App – Educational Farm Assembler");
    collection.AddContentEntry("Description", "Developed during my graduation internship, the Farmer Finance app " +
        "is an interactive educational tool that helps farmers understand and manage their operations by combining E-Learning modules on topics like asset inventory, energy use, and financial impact. " +
        "The project focused on building a robust, scalable software architecture to support a flexible and maintainable system as new features and interactive components are added. Developed for Windows and WebGL.");
    //General
    collection.AddContentEntry("Image", farmerImage);
    collection.AddContentEntry("Video", farmerVideo);
    collection.AddContentEntry("Thumbnail", farmerThumbnail);
    collection.AddContentEntry("Thesis", thesis);
    //Sequences
    collection.AddContentEntry("SSV", sequenceView);
    collection.AddContentEntry("SAIC", sequenceIntCondition);
    collection.AddContentEntry("SCR", sequenceConditionRules);
    collection.AddContentEntry("SVC", sequenceValueCondition);
    collection.AddContentEntry("CSCC", csConditionCheck);
    collection.AddContentEntry("CSCA", csConditionActivation);
    //Worker System
    collection.AddContentEntry("WM", workerManager);
    collection.AddContentEntry("CSSEC", csSerializeEventCall);
    collection.AddContentEntry("CSSC", csSerializeCallback);
    collection.AddContentEntry("OPWS", workerSystemOldPerformance);
    collection.AddContentEntry("NPWS", workerSystemNewPerformance);
    //Transmission System
    collection.AddContentEntry("TM", transmissionManager);
    collection.AddContentEntry("TI", transmissionInvoker);
    collection.AddContentEntry("TI2", transmissionInvoker2);
    collection.AddContentEntry("TC", transmissionConnector);
    collection.AddContentEntry("TC2", transmissionConnector2);
    collection.AddContentEntry("NTI", newTransmissionInvoker);
    collection.AddContentEntry("NTC", newTransmissionConnector);
    //Calculate System
    collection.AddContentEntry("CS", calculateSystem);
    return collection;
}

export default FarmerFinanceCollection;