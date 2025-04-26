import AssetEntry from "./AssetEntry.ts";

import meImage from "/me/MeOnMountain.png";

import freezerImage from "/projects/freezer_project/Freezer.png";
import aLittleToLateImage from "/projects/a_little_to_late/ALittleToLate.png";
import tractorImage from "/projects/tractor_project/Tractor.png";
import sweetDreamsImage from "/projects/sweet_dreams/SweetDreams.jpg";

import freezerThumbnail from "/projects/freezer_project/Thumbnail.png";
import aLittleToLateThumbnail from "/projects/a_little_to_late/Thumbnail.png";
import tractorThumbnail from "/projects/tractor_project/Thumbnail.png";
import sweetDreamsThumbnail from "/projects/sweet_dreams/Thumbnail.jpg";

import freezerVideo from "/projects/freezer_project/FreezerProject.mp4";
import aLittleToLateVideo from "/projects/a_little_to_late/ALittleToLate.mp4";
import tractorVideo from "/projects/tractor_project/TractorProject.mp4";
import sweetDreamsVideo from "/projects/sweet_dreams/SweetDreams.mp4";

class AssetManager {

    private static meCollection: AssetEntry = new AssetEntry();
    private static freezerCollection: AssetEntry = new AssetEntry();
    private static aLittleToLateCollection: AssetEntry = new AssetEntry();
    private static tractorCollection: AssetEntry = new AssetEntry();
    private static sweetDreamsCollection: AssetEntry = new AssetEntry();

    public static Construct(){
        let meCollection = AssetManager.meCollection;
        meCollection.AddEntry("Image", meImage);

        let freezerCollection = AssetManager.freezerCollection;
        freezerCollection.AddEntry("Title", "VR Training Simulation – CO₂ Refrigeration System");
        freezerCollection.AddEntry("Description", "A virtual reality training game designed to simulate equipment maintenance within a " +
            "retail environment. The objective is to diagnose and repair issues in a CO₂ refrigeration " +
            "installation within a set time limit. This project was developed as a refresher tool for " +
            "professionals in refrigeration technology, helping them revisit potential malfunctions and scenarios they " +
            "may encounter in real systems. It serves as preparation before attempting the written exam required to " +
            "renew their certification.");
        freezerCollection.AddEntry("Image", freezerImage);
        freezerCollection.AddEntry("Video", freezerVideo);
        freezerCollection.AddEntry("Thumbnail", freezerThumbnail);

        let aLittleToLateCollection = AssetManager.aLittleToLateCollection;
        aLittleToLateCollection.AddEntry("Image", aLittleToLateImage);
        aLittleToLateCollection.AddEntry("Video", aLittleToLateVideo);
        aLittleToLateCollection.AddEntry("Thumbnail", aLittleToLateThumbnail);

        let tractorCollection = AssetManager.tractorCollection;
        tractorCollection.AddEntry("Image", tractorImage);
        tractorCollection.AddEntry("Video", tractorVideo);
        tractorCollection.AddEntry("Thumbnail", tractorThumbnail);

        let sweetDreamsCollection = AssetManager.sweetDreamsCollection;
        sweetDreamsCollection.AddEntry("Image", sweetDreamsImage);
        sweetDreamsCollection.AddEntry("Video", sweetDreamsVideo);
        sweetDreamsCollection.AddEntry("Thumbnail", sweetDreamsThumbnail);
    }

    public static get FreezerCollection(): AssetEntry{
        return this.freezerCollection;
    }

    public static get ALittleToLateCollection(): AssetEntry{
        return this.aLittleToLateCollection;
    }

    public static get TractorCollection(): AssetEntry{
        return this.tractorCollection;
    }

    public static get SweetDreamsCollection(): AssetEntry{
        return this.sweetDreamsCollection;
    }

    public static get MeCollection(): AssetEntry{
        return this.meCollection;
    }
}

export default AssetManager;