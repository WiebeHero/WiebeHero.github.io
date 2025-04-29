import AssetEntry from "./AssetEntry.ts";

import tractorImage from "/projects/tractor_project/Tractor.png";
import tractorThumbnail from "/projects/tractor_project/Thumbnail.png";
import tractorVideo from "/projects/tractor_project/TractorProject.mp4";
import tractorChefExplains from "/projects/tractor_project/tractor_chef/TractorChefExplains.gif";
import tractorChefTip from "/projects/tractor_project/tractor_chef/TractorChefTip.gif";
import csTCT1 from "/projects/tractor_project/tractor_chef/CSTextFillerChef1.png";
import csTCT2 from "/projects/tractor_project/tractor_chef/CSTextFillerChef2.png";

import tractorAssembly from "/projects/tractor_project/tractor_assembly/TractorAssembly.gif";
import csT from "/projects/tractor_project/tractor_assembly/CSTractor.png";
import csCN from "/projects/tractor_project/tractor_assembly/CSCollisionNotifier.png";

function TractorCollection() {
    let collection: AssetEntry = new AssetEntry();

    collection.AddContentEntry("Title", "The Tractor Project – Educational Assembly Simulation");
    collection.AddContentEntry("Description", "The Tractor Project is an educational game designed to teach " +
        "players how to assemble a tractor by identifying and correctly placing its various components within a " +
        "time limit. The game is primarily aimed at prospective students attending open days, offering an " +
        "engaging and interactive introduction to mechanical assembly and agricultural engineering concepts.");
    collection.AddContentEntry("Image", tractorImage);
    collection.AddContentEntry("Video", tractorVideo);
    collection.AddContentEntry("Thumbnail", tractorThumbnail);

    //Tractor Chef
    collection.AddContentEntry("TractorChefExplains", tractorChefExplains);
    collection.AddContentEntry("TractorChefTip", tractorChefTip);
    collection.AddContentEntry("CSTCT1", csTCT1);
    collection.AddContentEntry("CSTCT2", csTCT2);

    //Tractor Assembly
    collection.AddContentEntry("TractorAssembly", tractorAssembly);
    collection.AddContentEntry("CST", csT);
    collection.AddContentEntry("CSCN", csCN);

    return collection;
}

export default TractorCollection;