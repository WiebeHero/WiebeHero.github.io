import NavBar from "./Navbar.tsx";
import Home from "./locations/Home.tsx";
import {JSX, ReactElement,/*useEffect, useRef, */useState} from "react";
import AnimationState from "./AnimationState.ts";
import AssetEntry from "../assets/AssetEntry.ts";
import AssetManager from "../assets/AssetManager.ts";
import FreezerProject from "./locations/Portfolio/pages/FreezerProject.tsx";
import ALittleToLate from "./locations/Portfolio/pages/ALittleToLate.tsx";
import TractorProject from "./locations/Portfolio/pages/TractorProject.tsx";
import SweetDreams from "./locations/Portfolio/pages/SweetDreams.tsx";
//import {ReactNode} from "react";

function PageManager(){

    function changePage(page: JSX.Element, pageNumber: number, ignore?: boolean){
        if((ignore === false && currentPage === pageNumber) || busy)
            return;
        setBusy(true);
        setCurrentPage(pageNumber);
        setAnimationState(new AnimationState(true, false));
        console.log("Set Page number!");
        setTimeout(() => {
            setAnimationState(new AnimationState(false, true));
            setLocation(page);
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
            setTimeout(() =>{
                setBusy(false);
            }, 950);
        }, 950);
    }

    const favorites: Map<AssetEntry, ReactElement> = new Map<AssetEntry, ReactElement>([
        [AssetManager.FreezerCollection, <FreezerProject changePage={changePage}></FreezerProject>],
        [AssetManager.ALittleToLateCollection, <ALittleToLate changePage={changePage}></ALittleToLate>],
        [AssetManager.TractorCollection, <TractorProject changePage={changePage}></TractorProject>],
        [AssetManager.SweetDreamsCollection, <SweetDreams changePage={changePage}></SweetDreams>]
    ]);

    const content: Map<AssetEntry, ReactElement> = new Map<AssetEntry, ReactElement>([

    ]);

    favorites.forEach((value, key) => {
        content.set(key, value);
    });

    const [location, setLocation] = useState(<Home content={content} changePage={changePage} favorites={favorites}></Home>);
    const [animationState, setAnimationState] = useState(new AnimationState());
    const [currentPage, setCurrentPage] = useState(0);
    const [busy, setBusy] = useState(false);

    return (
      <>
        <NavBar content={content} changePage={changePage} favorites={favorites} currentPage={currentPage}></NavBar>
          <div className={`position-relative`}>
              <div id={"location-content-container"} className={`${animationState.FadeIn ? "opacity-fade-in opacity-none translate-y-50" : "" } ${animationState.SlideOut ? "translate-x-110pc-neg-animation" : ""}`}>
                  {location}
              </div>
          </div>
      </>
    );
}

export default PageManager;