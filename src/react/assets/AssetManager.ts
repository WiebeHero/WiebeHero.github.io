import AssetEntry from "./AssetEntry.ts";
import FreezerCollection from "./FreezerCollection.ts";
import TractorCollection from "./TractorCollection.ts";

import meImage from "/me/MeOnMountain.png";

import aLittleToLateImage from "/projects/a_little_to_late/ALittleToLate.png";
import aLittleToLateThumbnail from "/projects/a_little_to_late/Thumbnail.png";
import aLittleToLateVideo from "/projects/a_little_to_late/ALittleToLate.mp4";

import sweetDreamsImage from "/projects/sweet_dreams/SweetDreams.jpg";
import sweetDreamsThumbnail from "/projects/sweet_dreams/Thumbnail.jpg";
import sweetDreamsVideo from "/projects/sweet_dreams/SweetDreams.mp4";


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

        let sweetDreamsCollection = AssetManager.sweetDreamsCollection;
        sweetDreamsCollection.AddContentEntry("Title", "Sweet Dreams – Multiplayer Party Brawler");
        sweetDreamsCollection.AddContentEntry("Description", "Sweet Dreams is a lighthearted multiplayer party game where " +
            "child-drawn monsters come to life and engage in whimsical pillow fights. Designed for 2 to 4 players using " +
            "controllers, the objective is to outlast the competition and be the last one standing. The game blends " +
            "playful art with competitive gameplay, creating a fun and imaginative experience for players of all ages.");
        sweetDreamsCollection.AddContentEntry("Image", sweetDreamsImage);
        sweetDreamsCollection.AddContentEntry("Video", sweetDreamsVideo);
        sweetDreamsCollection.AddContentEntry("Thumbnail", sweetDreamsThumbnail);
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