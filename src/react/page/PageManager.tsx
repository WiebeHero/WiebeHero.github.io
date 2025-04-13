import NavBar from "./Navbar.tsx";
import Home from "./locations/Home.tsx";
import {/*useEffect, useRef, */useState} from "react";
import AnimationState from "./AnimationState.ts";
//import {ReactNode} from "react";

function PageManager(){
    const [location, setLocation] = useState(<Home></Home>);
    const [animationState, setAnimationState] = useState(new AnimationState());
    return (
      <>
        <NavBar locationChange={setLocation} setAnimationState={setAnimationState}></NavBar>
          <div className={`position-relative`}>
              <div id={"location-content-container"} className={`${animationState.FadeIn ? "opacity-fade-in opacity-none translate-y-50" : "" } ${animationState.SlideOut ? "translate-x-110pc-neg-animation" : ""}`}>
                  {location}
              </div>
          </div>
      </>
    );
}

export default PageManager;