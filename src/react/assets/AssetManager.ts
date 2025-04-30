import AssetEntry from "./AssetEntry.ts";
import FreezerCollection from "./FreezerCollection.ts";
import TractorCollection from "./TractorCollection.ts";
import SweetDreamsCollection from "./SweetDreamsCollection.ts";
import ALittleToLateCollection from "./ALittleToLateCollection.ts";

import meImage from "/me/MeOnMountain.png";

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

        this.aLittleToLateCollection = ALittleToLateCollection();

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