import AssetEntry from "./AssetEntry.ts";
import image from "/projects/sweet_dreams/SweetDreams.jpg";
import thumbnail from "/projects/sweet_dreams/Thumbnail.jpg";
import video from "/projects/sweet_dreams/SweetDreams.mp4";
import countPlayers from "/projects/sweet_dreams/character_selection/SweetDreamsCountPlayers.gif";
import newPlayer from "/projects/sweet_dreams/character_selection/SweetDreamsNewPlayer.gif";
import readyUp from "/projects/sweet_dreams/character_selection/SweetDreamsReadyUp.gif";
import tutorialScreen from "/projects/sweet_dreams/character_selection/SweetDreamsTutorialScreen.gif";
import csCS from "/projects/sweet_dreams/character_selection/CSCharacterSelect.png";
import csS from "/projects/sweet_dreams/character_selection/CSScroller.png";
import cameraMovement from "/projects/sweet_dreams/camera_movement/CameraMovement.gif";
import csCM from "/projects/sweet_dreams/camera_movement/CSCameraMovement.png";
import damage from "/projects/sweet_dreams/damage/Damage.gif";
import portrait from "/projects/sweet_dreams/damage/Portrait.gif";
import csP from "/projects/sweet_dreams/damage/CSPillow.png";

function SweetDreamsCollection() {
    let collection: AssetEntry = new AssetEntry();

    collection.AddContentEntry("Title", "Sweet Dreams – Multiplayer Party Brawler");
    collection.AddContentEntry("Description", "Sweet Dreams is a lighthearted multiplayer party game where " +
        "child-drawn monsters come to life and engage in whimsical pillow fights. Designed for 2 to 4 players using " +
        "controllers, the objective is to outlast the competition and be the last one standing. The game blends " +
        "playful art with competitive gameplay, creating a fun and imaginative experience for players of all ages.");
    collection.AddContentEntry("Image", image);
    collection.AddContentEntry("Video", video);
    collection.AddContentEntry("Thumbnail", thumbnail);
    collection.AddContentEntry("SDCP", countPlayers);
    collection.AddContentEntry("SDNP", newPlayer);
    collection.AddContentEntry("SDRU", readyUp);
    collection.AddContentEntry("SDTS", tutorialScreen);
    collection.AddContentEntry("CSCS", csCS);
    collection.AddContentEntry("CSS", csS);
    collection.AddContentEntry("CM", cameraMovement);
    collection.AddContentEntry("CSCM", csCM);
    collection.AddContentEntry("Damage", damage);
    collection.AddContentEntry("Portrait", portrait);
    collection.AddContentEntry("CSP", csP);

    return collection;
}

export default SweetDreamsCollection;