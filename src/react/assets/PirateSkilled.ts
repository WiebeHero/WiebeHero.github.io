import AssetEntry from "./AssetEntry.ts";
import freezerImage from "/projects/freezer_project/Freezer.png";
import freezerThumbnail from "/projects/freezer_project/Thumbnail.png";
import freezerVideo from "/projects/freezer_project/FreezerProject.mp4";

function PirateSkilledCollection() {
    let collection: AssetEntry = new AssetEntry();

    collection.AddContentEntry("Title", "VR Training Simulation – CO₂ Refrigeration System");
    collection.AddContentEntry("Description", "A virtual reality training game designed to simulate equipment maintenance within a " +
        "retail environment. The objective is to diagnose and repair issues in a CO₂ refrigeration " +
        "installation within a set time limit. This project was developed as a refresher tool for " +
        "professionals in refrigeration technology, helping them revisit potential malfunctions and scenarios they " +
        "may encounter in real systems. It serves as preparation before attempting the written exam required to " +
        "renew their certification.");
    //General
    collection.AddContentEntry("Image", freezerImage);
    collection.AddContentEntry("Video", freezerVideo);
    collection.AddContentEntry("Thumbnail", freezerThumbnail);

    return collection;
}

export default PirateSkilledCollection;