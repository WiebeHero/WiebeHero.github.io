import AssetEntry from "./AssetEntry.ts";
import FreezerCollection from "./FreezerCollection.ts";
import TractorCollection from "./TractorCollection.ts";
import SweetDreamsCollection from "./SweetDreamsCollection.ts";

import meImage from "/me/MeOnMountain.png";

import aLittleToLateImage from "/projects/a_little_to_late/ALittleToLate.png";
import aLittleToLateThumbnail from "/projects/a_little_to_late/Thumbnail.png";
import aLittleToLateVideo from "/projects/a_little_to_late/ALittleToLate.mp4";


class AssetManager {

    private static meCollection: AssetEntry = new AssetEntry();
    private static freezerCollection: AssetEntry = new AssetEntry();
    private static aLittleToLateCollection: AssetEntry = new AssetEntry();
    private static tractorCollection: AssetEntry = new AssetEntry();
    private static sweetDreamsCollection: AssetEntry = new AssetEntry();

    public static Construct(){
        let meCollection = AssetManager.meCollection;
        meCollection.AddContentEntry("Image", meImage);

        this.freezerCollection = FreezerCollection();

        let aLittleToLateCollection = AssetManager.aLittleToLateCollection;
        aLittleToLateCollection.AddContentEntry("Title", "A Little Too Late – Texting and Driving Awareness Game");
        aLittleToLateCollection.AddContentEntry("Description", "A Little Too Late is a serious game developed to raise " +
            "awareness about the dangers of texting while driving. It highlights the risks and potential consequences " +
            "of distracted driving by placing players in situations where their attention is divided. Through " +
            "interactive storytelling and gameplay, the project emphasizes the importance of staying focused on the road.");
        aLittleToLateCollection.AddContentEntry("Image", aLittleToLateImage);
        aLittleToLateCollection.AddContentEntry("Video", aLittleToLateVideo);
        aLittleToLateCollection.AddContentEntry("Thumbnail", aLittleToLateThumbnail);

        this.tractorCollection = TractorCollection();

        this.sweetDreamsCollection = SweetDreamsCollection();

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