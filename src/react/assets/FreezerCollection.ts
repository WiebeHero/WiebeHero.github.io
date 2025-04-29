import AssetEntry from "./AssetEntry.ts";
import freezerImage from "/projects/freezer_project/Freezer.png";
import freezerThumbnail from "/projects/freezer_project/Thumbnail.png";
import freezerVideo from "/projects/freezer_project/FreezerProject.mp4";

import teleportationAnchor from "/projects/freezer_project/teleportationanchor/TeleportationAnchor.png";
import teleportationAnchorHover from "/projects/freezer_project/teleportationanchor/TeleportationAnchorHover.gif";
import teleportationAnchorParticles from "/projects/freezer_project/teleportationanchor/TeleportationAnchorParticles.gif";
import csTPManager from "/projects/freezer_project/teleportationanchor/CSTeleportationManager.png";
import csTPActivator from "/projects/freezer_project/teleportationanchor/CSTeleportationActivator.png";

import tooltipDevelopment from "/projects/freezer_project/tooltip/TooltipStart.gif";
import tooltipGlowingButton from "/projects/freezer_project/tooltip/GlowingButton.gif";
import csTT from "/projects/freezer_project/tooltip/CSTooltip.png";
import csTTS from "/projects/freezer_project/tooltip/CSTooltipSettings.png";

import followTargetSettings from "/projects/freezer_project/followtarget/FollowTargetSettings.png";
import csFT from "/projects/freezer_project/followtarget/CSFollowTarget.png";
import csFTS from "/projects/freezer_project/followtarget/CSFollowTargetSettings.png";

import inventoryRotations from "/projects/freezer_project/followtarget/InventoryRotation.gif";
import inventorySkeleton from "/projects/freezer_project/inventory/InventorySkeleton.png";
import cameras from "/projects/freezer_project/inventory/Cameras.png";
import cameraSees from "/projects/freezer_project/inventory/CameraSees.png";
import itemInInventory from "/projects/freezer_project/inventory/ItemInInventory.png";
import inventoryItems from "/projects/freezer_project/inventory/InventoryItems.gif";
import csINVINT from "/projects/freezer_project/inventory/CSInventoryInteractible.png";
import csINVIT from "/projects/freezer_project/inventory/CSInventoryItem.png";

import classDiagramSequence from "/projects/freezer_project/sequence/ClassDiagram.png";
import tutorialPart1 from "/projects/freezer_project/sequence/TutorialPart1.gif";
import tutorialPart2 from "/projects/freezer_project/sequence/TutorialPart2.gif";
import csS1 from "/projects/freezer_project/sequence/CSSequence.png";
import csS2 from "/projects/freezer_project/sequence/CSSequence2.png";

function FreezerCollection() {
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

    //TeleportationAnchor
    collection.AddContentEntry("TeleportationAnchor", teleportationAnchor);
    collection.AddContentEntry("TeleportationAnchorHover", teleportationAnchorHover);
    collection.AddContentEntry("TeleportationAnchorParticles", teleportationAnchorParticles);
    collection.AddContentEntry("CSTeleportationManager", csTPManager);
    collection.AddContentEntry("CSTeleportationActivator", csTPActivator);

    //Tooltip
    collection.AddContentEntry("TooltipDevelopment", tooltipDevelopment);
    collection.AddContentEntry("TooltipGlowingButton", tooltipGlowingButton);
    collection.AddContentEntry("CSTT", csTT);
    collection.AddContentEntry("CSTTS", csTTS);

    //Follow Target
    collection.AddContentEntry("FollowTargetSettings", followTargetSettings);
    collection.AddContentEntry("CSFT", csFT);
    collection.AddContentEntry("CSFTS", csFTS);

    //Inventory
    collection.AddContentEntry("InventoryRotation", inventoryRotations);
    collection.AddContentEntry("InventorySkeleton", inventorySkeleton);
    collection.AddContentEntry("Cameras", cameras);
    collection.AddContentEntry("CameraSees", cameraSees);
    collection.AddContentEntry("ItemInInventory", itemInInventory);
    collection.AddContentEntry("InventoryItems", inventoryItems);
    collection.AddContentEntry("CSINVINT", csINVINT);
    collection.AddContentEntry("CSINVIT", csINVIT);

    //Sequence
    collection.AddContentEntry("ClassDiagram", classDiagramSequence);
    collection.AddContentEntry("TutorialPart1", tutorialPart1);
    collection.AddContentEntry("TutorialPart2", tutorialPart2);
    collection.AddContentEntry("CSS1", csS1);
    collection.AddContentEntry("CSS2", csS2);

    return collection;
}

export default FreezerCollection;