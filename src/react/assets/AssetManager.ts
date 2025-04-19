
import AssetEntry from "./AssetEntry.ts";

import freezerImage from "/projects/freezer_project/Freezer.png";
import aLittleToLateImage from "/projects/a_little_to_late/ALittleToLate.png";
import tractorImage from "/projects/tractor_project/Tractor.png";
import sweetDreamsImage from "/projects/sweet_dreams/SweetDreams.jpg";

import freezerVideo from "/projects/freezer_project/FreezerProject.mp4";
import aLittleToLateVideo from "/projects/a_little_to_late/ALittleToLate.mp4";
import tractorVideo from "/projects/tractor_project/TractorProject.mp4";
import sweetDreamsVideo from "/projects/sweet_dreams/SweetDreams.mp4";

class AssetManager {

    private static freezerCollection = new AssetEntry(freezerImage, freezerVideo);
    private static aLittleToLateCollection = new AssetEntry(aLittleToLateImage, aLittleToLateVideo);
    private static tractorCollection = new AssetEntry(tractorImage, tractorVideo);
    private static sweetDreamsCollection = new AssetEntry(sweetDreamsImage, sweetDreamsVideo);

    public static get FreezerCollection(){
        return this.freezerCollection;
    }

    public static get ALittleToLateCollection(){
        return this.aLittleToLateCollection;
    }

    public static get TractorCollection(){
        return this.tractorCollection;
    }

    public static get SweetDreamsCollection(){
        return this.sweetDreamsCollection;
    }
}

export default AssetManager;