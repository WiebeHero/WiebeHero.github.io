import AssetEntry from "./AssetEntry.ts";

import meImage from "/me/MeOnMountain.png";

import freezerImage from "/projects/freezer_project/Freezer.png";
import freezerThumbnail from "/projects/freezer_project/Thumbnail.png";
import freezerVideo from "/projects/freezer_project/FreezerProject.mp4";
import teleportationAnchor from "/projects/freezer_project/teleportationanchor/TeleportationAnchor.png";
import teleportationAnchorHover from "/projects/freezer_project/teleportationanchor/TeleportationAnchorHover.gif";
import teleportationAnchorParticles from "/projects/freezer_project/teleportationanchor/TeleportationAnchorParticles.gif";

import aLittleToLateImage from "/projects/a_little_to_late/ALittleToLate.png";
import aLittleToLateThumbnail from "/projects/a_little_to_late/Thumbnail.png";
import aLittleToLateVideo from "/projects/a_little_to_late/ALittleToLate.mp4";

import tractorImage from "/projects/tractor_project/Tractor.png";
import tractorThumbnail from "/projects/tractor_project/Thumbnail.png";
import tractorVideo from "/projects/tractor_project/TractorProject.mp4";

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

        let freezerCollection = AssetManager.freezerCollection;
        freezerCollection.AddContentEntry("Title", "VR Training Simulation – CO₂ Refrigeration System");
        freezerCollection.AddContentEntry("Description", "A virtual reality training game designed to simulate equipment maintenance within a " +
            "retail environment. The objective is to diagnose and repair issues in a CO₂ refrigeration " +
            "installation within a set time limit. This project was developed as a refresher tool for " +
            "professionals in refrigeration technology, helping them revisit potential malfunctions and scenarios they " +
            "may encounter in real systems. It serves as preparation before attempting the written exam required to " +
            "renew their certification.");
        freezerCollection.AddContentEntry("Image", freezerImage);
        freezerCollection.AddContentEntry("Video", freezerVideo);
        freezerCollection.AddContentEntry("Thumbnail", freezerThumbnail);
        freezerCollection.AddContentEntry("TeleportationAnchor", teleportationAnchor);
        freezerCollection.AddContentEntry("TeleportationAnchorHover", teleportationAnchorHover);
        freezerCollection.AddContentEntry("TeleportationAnchorParticles", teleportationAnchorParticles);

        let aLittleToLateCollection = AssetManager.aLittleToLateCollection;
        aLittleToLateCollection.AddContentEntry("Title", "A Little Too Late – Texting and Driving Awareness Game");
        aLittleToLateCollection.AddContentEntry("Description", "A Little Too Late is a serious game developed to raise " +
            "awareness about the dangers of texting while driving. It highlights the risks and potential consequences " +
            "of distracted driving by placing players in situations where their attention is divided. Through " +
            "interactive storytelling and gameplay, the project emphasizes the importance of staying focused on the road.");
        aLittleToLateCollection.AddContentEntry("Image", aLittleToLateImage);
        aLittleToLateCollection.AddContentEntry("Video", aLittleToLateVideo);
        aLittleToLateCollection.AddContentEntry("Thumbnail", aLittleToLateThumbnail);

        let tractorCollection = AssetManager.tractorCollection;
        tractorCollection.AddContentEntry("Title", "The Tractor Project – Educational Assembly Simulation");
        tractorCollection.AddContentEntry("Description", "The Tractor Project is an educational game designed to teach " +
            "players how to assemble a tractor by identifying and correctly placing its various components within a " +
            "time limit. The game is primarily aimed at prospective students attending open days, offering an " +
            "engaging and interactive introduction to mechanical assembly and agricultural engineering concepts.");
        tractorCollection.AddContentEntry("Image", tractorImage);
        tractorCollection.AddContentEntry("Video", tractorVideo);
        tractorCollection.AddContentEntry("Thumbnail", tractorThumbnail);

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