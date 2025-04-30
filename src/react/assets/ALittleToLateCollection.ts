import AssetEntry from "./AssetEntry.ts";
import image from "/projects/a_little_to_late/ALittleToLate.png";
import thumbnail from "/projects/a_little_to_late/Thumbnail.png";
import video from "/projects/a_little_to_late/ALittleToLate.mp4";
import terrainGenerator from "/projects/a_little_to_late/terrain/TerrainGenerator.gif";
import csTG from "/projects/a_little_to_late/terrain/CSTerrain.png";
import texting from "/projects/a_little_to_late/texting/Texting.gif";
import csT from "/projects/a_little_to_late/texting/CSTexting.png";
import crashing from "/projects/a_little_to_late/crashing/Crash.gif";

function ALittleToLateCollection() {
    let collection: AssetEntry = new AssetEntry();

    collection.AddContentEntry("Title", "A Little Too Late - Texting and Driving Awareness Game");
    collection.AddContentEntry("Description", "A Little Too Late is a serious game developed to raise awareness about the dangers of " +
        "texting while driving. It highlights the risks and potential consequences of distracted driving by placing players " +
        "in situations where their attention is divided. Through interactive storytelling and gameplay, the project emphasizes" +
        "the importance of staying focused on the road.");
    collection.AddContentEntry("Image", image);
    collection.AddContentEntry("Video", video);
    collection.AddContentEntry("Thumbnail", thumbnail);
    collection.AddContentEntry("TerrainGenerator", terrainGenerator);
    collection.AddContentEntry("CSTG", csTG);
    collection.AddContentEntry("Texting", texting);
    collection.AddContentEntry("CST", csT);
    collection.AddContentEntry("Crashing", crashing);

    return collection;
}

export default ALittleToLateCollection;